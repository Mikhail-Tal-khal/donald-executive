import { cancellationCharges } from "@/lib/terms"
import { cn } from "@/lib/utils"

export function CancellationTable({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border", className)}>
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Cancellation charges by notice period</caption>
        <thead className="bg-card">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:px-6"
            >
              Cancellation notice
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground sm:px-6"
            >
              Charge
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {cancellationCharges.map((row) => (
            <tr key={row.notice} className="bg-background/50">
              <td className="px-4 py-3.5 text-foreground sm:px-6">{row.notice}</td>
              <td className="px-4 py-3.5 text-right sm:px-6">
                <span className="inline-flex items-center gap-3">
                  <span
                    className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-muted sm:block"
                    aria-hidden="true"
                  >
                    <span
                      className="block h-full rounded-full bg-primary"
                      style={{ width: `${row.charge}%` }}
                    />
                  </span>
                  <span className="w-12 font-serif text-base text-primary tabular-nums">
                    {row.charge}%
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
