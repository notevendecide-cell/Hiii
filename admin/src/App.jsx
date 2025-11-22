import { useEffect, useState } from 'react'
import './App.css'

const API_BASE = 'http://localhost:5000'

function App() {
  const [queries, setQueries] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedQuery, setSelectedQuery] = useState(null)
  const [emailForm, setEmailForm] = useState({
    to: '',
    subject: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState('')

  const loadQueries = async () => {
    try {
      setLoading(true)
      setError('')
      const res = await fetch(`${API_BASE}/api/admin/queries`)
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to load queries')
      }
      setQueries(data.data)
    } catch (err) {
      setError(err.message || 'Failed to load queries')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadQueries()
  }, [])

  const handleSelectQuery = (query) => {
    setSelectedQuery(query)
    setSendResult('')
    setEmailForm({
      to: query.email,
      subject: `Re: ${query.subject || 'Your Query'}`,
      message:
        `Dear ${query.name},\n\nThank you for reaching out to Abhimanyu Public Higher Secondary School.\n\n` +
        `We are writing in response to your query submitted on ${new Date(query.createdAt).toLocaleString()}.\n\n` +
        `Best regards,\nSchool Administration`,
    })
  }

  const handleEmailChange = (e) => {
    const { name, value } = e.target
    setEmailForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSendEmail = async (e) => {
    e.preventDefault()
    try {
      setSending(true)
      setSendResult('')
      setError('')

      const res = await fetch(`${API_BASE}/api/admin/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailForm),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send email')
      }
      setSendResult('Email sent successfully.')
    } catch (err) {
      setError(err.message || 'Failed to send email')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="admin-app">
      <header className="admin-header">
        <div className="admin-header-inner">
          <div>
            <h1 className="admin-title">Admin Dashboard</h1>
            <p className="admin-subtitle">Abhimanyu Public Higher Secondary School</p>
          </div>
          <button onClick={loadQueries} className="admin-button-primary">
            Refresh
          </button>
        </div>
      </header>

      <main className="admin-main">
        <section className="admin-panel">
          <div className="admin-panel-header">
            <h2 className="admin-panel-title">Queries</h2>
            {loading && <span className="admin-panel-loading">Loading...</span>}
          </div>

          {error && <div className="admin-alert-error">{error}</div>}

          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {queries.length === 0 && !loading ? (
                  <tr>
                    <td className="admin-table-empty" colSpan={4}>
                      No queries found.
                    </td>
                  </tr>
                ) : (
                  queries.map((q) => (
                    <tr
                      key={q._id}
                      className={selectedQuery?._id === q._id ? 'admin-table-row-selected' : ''}
                    >
                      <td>
                        <div className="admin-query-name">{q.name}</div>
                        <div className="admin-query-email">{q.email}</div>
                      </td>
                      <td>
                        <div className="admin-query-subject">{q.subject || '—'}</div>
                        <div className="admin-query-message-preview">{q.message}</div>
                      </td>
                      <td>
                        <div className="admin-query-date">
                          {q.createdAt ? new Date(q.createdAt).toLocaleString() : '—'}
                        </div>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          onClick={() => handleSelectQuery(q)}
                          className="admin-button-secondary"
                        >
                          View &amp; Reply
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="admin-panel">
          <h2 className="admin-panel-title">Send Email</h2>
          <p className="admin-panel-description">
            Select a query on the left to pre-fill the email. You can also edit the details before sending.
          </p>

          <form onSubmit={handleSendEmail} className="admin-form">
            <div>
              <label className="admin-field-label" htmlFor="to">
                To
              </label>
              <input
                id="to"
                name="to"
                type="email"
                value={emailForm.to}
                onChange={handleEmailChange}
                className="admin-input"
                placeholder="recipient@example.com"
                required
              />
            </div>
            <div>
              <label className="admin-field-label" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={emailForm.subject}
                onChange={handleEmailChange}
                className="admin-input"
                placeholder="Email subject"
                required
              />
            </div>
            <div>
              <label className="admin-field-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                value={emailForm.message}
                onChange={handleEmailChange}
                className="admin-textarea"
                placeholder="Type your message to the recipient..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="admin-send-button"
            >
              {sending ? 'Sending...' : 'Send Email'}
            </button>

            {sendResult && <p className="admin-alert-success">{sendResult}</p>}
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
