# GRAN-UI

> Magelangkab UI Component Library berbasis **Tailwind CSS**

## 🚀 Requirements

Pastikan environment kamu memenuhi:

- Node.js ≥ 18
- React ≥ 18
- Package Manager: `npm`, `pnpm`, atau `bun`

---

## 📦 Installation

Install langsung dari GitHub:

```bash
bun add github:ridwanhanafi/gren-ui
```

---

## 🧩 Pre-Use

Install Tailwind

```python
bun add tailwindcss
```

## ⚙️ Configuration

Tambahkan di global.css

```python
@import "tailwindcss";
@import "@gren/ui/tailwind";
@import "@gren/ui/style";

@custom-variant dark (&:where(.dark, .dark *)); 
.... # all css file
```

**note**: pastikan paling atas

Jika menggunakan framework


| Frawework | Additional Packages    |
| --------- | ---------------------- |
| Next Js   | `postcss` |


### React

- Minimum react js ≥18


| Component | Use                       | Note                  |
| --------- | ------------------------- | --------------------- |
| Button    | `<Button></Button>`       | -                     |
| Icon      | `<Icon name="plus-lg" />` | `bootstrap 5` |
| Input     | `<Input />`               | -                     |
| Select    | `<Select options={[{ label: "Option 1", value: "1" }]}></Select>` | - |
| Textarea  | `<Textarea defaultValue="isi default" />` | -     |
| Spinner   | `<Spinner />`             | -                     |
| Badge     | `<Badge>Badge</Badge>`    | `'gray', 'red', 'yellow' ...etc.` |
| Alert     | `<Alert title="Yey" message="Alert notifikasi">` | `'gray', 'red', 'yellow' ...etc.` |



## License

[MIT](https://choosealicense.com/licenses/mit/)