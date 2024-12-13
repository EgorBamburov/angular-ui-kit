export interface IToast {
  message?: string
  title?: string
  type: 'error' | 'success' | 'warning'
  duration?: number
}
