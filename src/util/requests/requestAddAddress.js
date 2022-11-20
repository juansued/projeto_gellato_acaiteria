import { axiosI } from '../../services/axios';

async function requestAddAddress(
  sucess,
  setStateButton,
  createDataAddress,
  setCreateDataAddress
) {
  axiosI
    .post(`/users/addresses/`, createDataAddress)
    .then(({ data }) => {
      sucess();
    })
    .catch(err => {
      setStateButton('err');
      setCreateDataAddress({
        street: '',
        neighborhood: '',
        number: '',
        state: '',
        city: '',
        cep: '',
        addressDetail: ''
      });
      setTimeout(() => {
        setStateButton(true);
      }, '3000');
    });
}

export default requestAddAddress;
