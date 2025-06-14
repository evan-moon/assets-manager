import { appsScriptProperties } from '../appsScriptProperties';
import { syncStocks } from '../batches/stocks';
import { assertEnvs } from '../asserts';
import { syncCurrencies } from '../batches/currencies';

function batch() {
  assertEnvs(appsScriptProperties);

  const { STOCKS_SHEET_NAME, STOCKS_NOTION_DB_ID, CURRENCIES_SHEET_NAME, CURRENCIES_NOTION_DB_ID } =
    appsScriptProperties;

  syncStocks(STOCKS_SHEET_NAME, STOCKS_NOTION_DB_ID);
  syncCurrencies(CURRENCIES_SHEET_NAME, CURRENCIES_NOTION_DB_ID);
}

batch();
