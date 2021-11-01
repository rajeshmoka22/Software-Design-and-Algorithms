import { ConverterController } from './controllers/converter.controller';
import { ConverterSerivce } from './services/converter.service';
import { CurrencyConverterView } from './views/converter.view';

const app = new ConverterController(new ConverterSerivce(), new CurrencyConverterView());
