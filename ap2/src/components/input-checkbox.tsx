'use client'
interface InputCheckboxProps {
    label: string;
    name: string;
    selectedValue: string;
    onChange: (value: string) => void;
}

export default function InputCheckbox({ label, name, selectedValue, onChange }: InputCheckboxProps) {
    return (
        <div className="mt-4 text-zinc-900 dark:text-zinc-200">
            <label className="text-sm block">{label}</label>
            <div className="flex space-x-4 mt-2">
                <label className="flex items-center">
                    <input
                        type="radio"
                        name={name}
                        value="Sim"
                        checked={selectedValue === "Sim"}
                        onChange={() => onChange("Sim")}
                        className="mr-2"
                    />
                    Sim
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name={name}
                        value="Não"
                        checked={selectedValue === "Não"}
                        onChange={() => onChange("Não")}
                        className="mr-2"
                    />
                    Não
                </label>
            </div>
        </div>
    );
}