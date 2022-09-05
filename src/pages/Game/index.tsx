// Pagina para elaboração do jogo

export const Game = () => <>export const ProofOfPurchase = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <div className=" flex flex-col items-center px-3.5 py-3 bg-white p rounded-xl mt-6 h-fit w-3/4 gap-2">
        <h1 className="text-xl font-medium font-brand text-header-gold flex justify-start gap-2 self-start pl-3">
          <img className="" src={header} alt="" />
        </h1>
        <div className="w-[250px] h-[191px] rounded p-1 mt-3 bg-body-light-100 flex flex-col justify-around">
          <div className="flex flex-col">
            <h2 className="text-xs font-medium font-brand  text-input-placeholder">
              Tipo: Transferência - Enviada
            </h2>
            <span className=" text-[#A2A2A2] font-brand  mt-2 text-sm ml-1">
              Data: 03/07/2022 20:45
            </span>
          </div>
          <div>
            <h3 className="text-xs font-medium font-brand  text-input-placeholder">
              Dados de destino:
            </h3>
            <div className="flex flex-col">
              <span className=" text-[#A2A2A2] font-brand  text-sm ml-1">
                Nome: Dhalsim Fonseca
              </span>
              <span className=" text-[#A2A2A2] font-brand  text-sm ml-1">
                Agência: 1027-7
              </span>
              <span className=" text-[#A2A2A2] font-brand  text-sm ml-1">
                Conta: 93459-2
              </span>
            </div>
          </div>

          <div className="flex justify-between w-full">
            <span className="text-base font-medium font-brand  text-input-placeholder">
              Valor
            </span>
            <span className="text-base font-medium font-brand  text-input-placeholder">
              21,2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};</>;
