// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4bheBtkPuetRtlC4RVozC+5ZA7tRQmag0F0sHRjYWGtuweTg1VQx3fsAXH1yYHiDV1zNLCYmBJs3cLl84KbUdm6MJYu5QmM9epS2iHCvXFbPHygKHPQpbcF87z1rM8YRhMqLjjYj8S0mCsR3CT62KyGxp7utFxkEZo3CmrDt9V//HFnqEAXaN4VoNB5tkaT2NwH+SLxHDoJ5470iWxOjZMU0Ku0NKtnGOwOfhjTaZDU40wfBLRQuhUWbsXR7+tiIHQuqyy91VYGTYn1HQIJ6ZxIfiBw7jp0DloDw4t93qGkb6NVwpg5rXLYLoWebWfuWJzbUgpj4WgYkdaZmrz9LJRU579SZ8REe40Jk495gPCfoEDkp84lYcjrrZ80oGz9nsu8tKgX553AxiECkoXrGCcsJZHw/ii8kqTdoXFC5cbqFAU4JY8esYJQG0JQLdVXTY1qPsXEZmPzClfATypXmfx6w39sjbFc7K7QPFVaLeQuKJRCA+kVuKltOcXz6GWJeA4R0/Gqk55A3qKhIO6MdPanHzZutaOSXgfvhGVpR1mxfXjMCLMta5LdAa80mb4Ktg6jU2XX9Kc/xmsEGznxXaas72hrWdD9uhmHl1brXDQXHJQMdE2fes0AJ90yfRSF8nD4PyAONy5cjnqJBBy94ICD6daxbx6txDwU3smLM30/BoDnkqKUMaO94MlSPs763qIVcsOs+VPDtu1LZmG751eMcEIdc0nZd4yn6nVaKGjixAU8YwQkm55t7rb8UkVEMEdRWp5/wHafC+jLsCKNa+fmGuU1epXVj/lnAlCEMBiz+6K6PUKlPNp8bCfx7BmvHcIbYIz3g/22LHnDaWIWumg+RHIOds8eoNGN+bOXbVNC29PswWCUYIggUwK4gibXAD7e+NisdJvqhViX6GmMg9FiSZmpkG6LbdZYoJ75gCOy+WtE/qq5PS9aVca3fE05/pauUtqsgCuem2T+z1fD8eBNv2Ym0/8/MZL2JmZ816o5jL9lnWEFEJfkE0WA0lDUFtGutie1Nzdz8nm8f9FxDuP0AM73HegZZlmx4c00fQ6FNpm2eAha/zhvj1Hk94G3XyrqAYgHbDwdwVF1ZnPEKLV7ZXN1gPilGhexBIOe4fcFJFNaLqw4zUjjaMXSr433L63X99m37iPbSCDxNQYY5XnNOvw35eiaPNe4f9pLWTpd/HhQxn2t5LtCdKNgjSvQyQE1clhRB8p0rC7nd2KN90n3mVgnmLWCwUm4I+szsZSNPCepQWVftByPPtWPofYmLwpDSh2C6qau/8PZCOmDbOKkYOAVADef3fkFOJrOqYmZxUNkJlhiTVyIj3ZM15QhhCpOnDdfvKv+y9g==';const _IH='452eb62106fd0c8ce355d1086213e720202b3a3e7f2282509e301d4bb90901fb';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
