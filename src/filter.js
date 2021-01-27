import numeral from 'numeral'

const dollarFiler = (value) => 
    (!value ? '$ 0': numeral(value).format('($ 0.00a)') );

const percentFilter = (value) => 
    ((!value ? '0%': `${Number(value).toFixed(2)}%` ));

export { dollarFiler, percentFilter }