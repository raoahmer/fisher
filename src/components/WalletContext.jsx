// import React, { useContext, createContext, useState } from 'react';
// import { WalletProvider as BaseWalletProvider } from '@solana/wallet-adapter-react';

// const WalletContext = createContext();

// export function WalletProvider({ children }) {
//   const [wallet, setWallet] = useState();

//   return (
//     <WalletContext.Provider value={{ wallet, setWallet }}>
//       <BaseWalletProvider>{children}</BaseWalletProvider>
//     </WalletContext.Provider>
//   );
// }

// export function useWallet() {
//   return useContext(WalletContext);
// }