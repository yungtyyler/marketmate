export type GroceryItem = {
  id: string
  created_at: string
  name: string
  image_url: string | null
  is_checked: boolean
  quantity: string
  family_id: string
}

export type UserProfile = {
  id: string
  family_id: string | null
  role: 'wife' | 'husband' | 'shopper'
}