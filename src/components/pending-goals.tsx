import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { getPendingGoals } from '../http/get-pending-goals'
import { useQuery } from '@tanstack/react-query'

export function PendingGoals() {
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, // 60 segundos
  })

  if (!data) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => {
        return (
          <OutlineButton key={goal.id}>
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}

      <OutlineButton>
        <Plus className="size-4 text-zinc-600" />
        Nadar
      </OutlineButton>

      <OutlineButton>
        <Plus className="size-4 text-zinc-600" />
        Praticar exercício
      </OutlineButton>

      <OutlineButton>
        <Plus className="size-4 text-zinc-600" />
        Me alimentar bem
      </OutlineButton>
    </div>
  )
}