---
footer: true
sidebar: false
---

# DevOps

## Calendar

| Date       | Week | Lessons (13:15 - 14:45)                | Labs (14:55 - 16:30)           |
| ---------- | :--: | -------------------------------------- | ------------------------------ |
| 2023-09-20 |  01  | [Introduction](./lessons/introduction) | [Tools](./labs/tools)          |
| 2023-09-27 |  02  |                                        |                                |
| 2023-10-04 |  03  |                                        |                                |
| 2023-10-11 |  04  |                                        |                                |
| 2023-10-18 |  05  |                                        |                                |
| 2023-10-25 |      | _Interdisciplinary activities_         | _Interdisciplinary activities_ |
| 2023-11-01 |  06  |                                        |                                |
| 2023-11-08 |  07  |                                        |                                |
| 2023-11-15 |  08  |                                        |                                |
| 2023-11-22 |  09  |                                        |                                |
| 2023-11-29 |  10  |                                        |                                |
| 2023-12-06 |  11  |                                        |                                |
| 2023-12-13 |  12  |                                        |                                |
| 2023-12-20 |  13  |                                        |                                |
| 2023-12-27 |      | _Holidays_                             | _Holidays_                     |
| 2024-01-03 |      | _Holidays_                             | _Holidays_                     |
| 2024-01-10 |  14  |                                        |                                |
| 2024-01-17 |  15  |                                        |                                |
| 2024-01-24 |  16  |                                        |                                |
|            |      | Examen                                 | Examen                         |

## Links

- [Academic calendar](https://heig-vd.ch/formation/bachelor/calendrier-academique/)
- [Fiche d'unité](https://gaps.heig-vd.ch/public/fiches/uv/uv.php?id=7181&plan=792)
- [Cyberlearn](https://cyberlearn.hes-so.ch/course/view.php?id=9480)

<script setup>
import { onMounted, nextTick } from 'vue'

const date = new Date()
const day = date.getDay()
const currentDate = new Date(date.setDate(date.getDate() - day + (day === 0 ? -4 : 3)))
const dateText = currentDate.toISOString().split('T')[0]
const weekend = day === 0 || day === 6

onMounted(() => {
    Array.from(document.querySelectorAll("td"))
        .filter(a => a.textContent === dateText)
        .forEach(element => {
            const parent = element.parentElement
            parent.classList.add("current", weekend ? "weekend" : "week")
            nextTick(() => parent.scrollIntoView({ behavior: 'smooth' }))
        })
})
</script>
