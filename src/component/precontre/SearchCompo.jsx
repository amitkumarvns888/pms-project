import { Select, Spin } from "antd";
// import  { SelectProps } from "antd";
import debounce from "lodash/debounce";
import  React from "react";
import { useMemo, useRef, useState } from "react";

// interface DebounceSelectProps<ValueType = any>
// 	extends Omit<SelectProps<ValueType | ValueType[]>, "options" | "children"> {
// 	fetchOptions: (search: string) => Promise<ValueType[]>;
// 	debounceTimeout?: number;
// }

export function DebounceSelect({
	fetchOptions,
	debounceTimeout = 800,
	...props
}) {
	const [fetching, setFetching] = useState(false);
	const [options, setOptions] = useState([]);
	const fetchRef = useRef(0);

	const debounceFetcher = useMemo(() => {
		const loadOptions = (value) => {
			fetchRef.current += 1;
			const fetchId = fetchRef.current;
			setOptions([]);
			setFetching(true);

			fetchOptions(value).then((newOptions) => {
				if (fetchId !== fetchRef.current) {
					// for fetch callback order
					return;
				}

				setOptions(newOptions);
				setFetching(false);
			});
		};

		return debounce(loadOptions, debounceTimeout);
	}, [fetchOptions, debounceTimeout]);

	return (
		<Select
			labelInValue
			filterOption={false}
			onSearch={debounceFetcher}
			notFoundContent={fetching ? <Spin size="small" /> : null}
			{...props}
			options={options}
		/>
	);
}

export async function fetchUserList(username) {
	console.log("fetching user", username);

	return fetch("https://randomuser.me/api/?results=5")
		.then((response) => response.json())
		.then((body) =>
			body.results.map(
				(user) => ({
					label: `${user.name.first} ${user.name.last}`,
					value: user.login.username,
				}),
			),
		);
}