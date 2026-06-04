// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yIYCs8DcIXEkrLvXP7y6rgpzQLNViSYib3usnCUXjxLszr/JkmUbVKLdHMBC9zpdm5Gslanc+C4ma6241Qr2wXMzMSFUzfuapwaiHf7st4nUVUARFbUn0EY5fht3xCLQoTb2p8EWY8lSL9z9V1LZqVHL19DytqkWA6+cDFI0qAMFpuzh8l/tsBZhf7G1bNM5XeWZEfxoL1m+RJk/OdSBoysoPZEe9H5KK+TV4Pn2HDANKHGs8EFBsdiY4p7GCrXsVpH7OPa3SqFJJrp68S6LbipezRkn+C4X6wXgBRzrPFeYrC7hM4FJQtXJzernRLoP38PnzcePpM2J7Y2eIlRGT4gebjcUTnJvBRypFazYgLhBv4Yr7XGNXHnqA4WfF1GgDP0p+hrhMrpncy3SuGNohQ1KJw7Q66A4+mLH0fNg9voIAjrn3HhV9jGY/BQtXtSVcBfjQeIwui7U2R9Af3MT6tvrkStrLwtL+Go3oAAI0RxnR0pD97qOtQFHI4TiYPBdQnYXepbYdtdA1qOQHezyIQQWstkKDa7kbs7qY5w0VPHS9WGYykurPQAbemwj2SS1CL28zlYUBOlz0QoLFank/ZADouDWeCZY01eDDjGB9B5VUbdRWdBi+gFVioOax9ZYsVaTTRyl8c1BLSRoUfQLzA3y9rXkqmclQtdFWQNzw6sM75EGe3GWgS2vmP9zCzqmQBtc6iE59yTEN3b0NU5xYmeYJB+6HSu/nFSZ/7x6MZUm930TEFKus7tJ1k07obqVB/R/Ib9FlKxVvHJCzhP68AOCWqsVHteeMI07WLNiCIIyCc4KBqZY8ChRDW76fm+IWZU3Rq4dpnRXtFtjQfQfY+1sTutRIKW/VKSIQA1hsiuCNwl+ueQiXdZHL0yff25AU5yXhXFULxUv1qXfj62ZNQwMn6scFfoH07re1mN/d9QBXR66aDXqOv2hjrsBaEQrxoyFMKUFV3FK9IFuu1edskhCiwpq9CiUniU4OeLkJv3uYC0TE2XBFRaB7Er4qcZ+iZJrsTGYbkmE+ovIQ9NfM9X2kiXSAi7A9OGfjhXEnKQV5vTBsmhj7XXajCz9V0yqH4t1dRyDz/fPt6ZaqTERcrs5HRtk8dbgssORuvBTUB0DOLWa7S7bLuMxQfWolD50f7a0dJjezaKAmaeF6tmq8JSN1keq04sT9er7RU1vI78tb4CHy5/Ag/am3FaTH+31MQZT0aixxx+aOkMINnlJ4SN0V9oMWZdx3EVS2S0pJ1F7/zbwdvASyriLMPlZFiu7HeEp2pWJf9bTjhMMSY1HwzDFPRAwEDzTXPMDyYIMpDySoxl29u1NdA71aDfW5z974jyL9gbCOSlb0zPuLJOD1qtRiYWeLMoDVKPu+YvJ6erACfzuxxNhaQ==';const _IH='cdcd8c5c73483dc5f86d6cf0ab9fd002f36b952e703f94c283f991959d358638';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
