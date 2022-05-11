<MenuItem>
    <FormControlLabel
        className="m-0"
        control={
        <Switch
            checked={state}
            onChange={handleChange}
            name="checkedB"
            color="primary"
        />
        }
        label=""
    />
</MenuItem>

// If state is true then we set dark theme class in body.

export const setTheme = (changeTheme: boolean) => {
    if (changeTheme) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }