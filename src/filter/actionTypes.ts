export interface SetFilter {
  type: 'set_filter',
  filter: 'all' | 'todo' | 'completed'
}