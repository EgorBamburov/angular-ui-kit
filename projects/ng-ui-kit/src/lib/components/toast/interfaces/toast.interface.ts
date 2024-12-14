export interface IToast {
  message?: string
  title?: string
  duration?: number
  status: TToastStatus
}

export type TToastStatus  = 'success' | 'warning' | 'error'
