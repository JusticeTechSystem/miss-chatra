// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpSG9yduJsUMzd9VF4DkYZYRTztGaNxteYltOCdmt3r58SqBWj3fw3r3sV/r8KCKrFKTJMNbKppoNOAqyt9N0VmnLtZIL5OORP+QoIMhU1X0Je4nlYsEYNHSK/Tpq89OXyvMiFKflLA1tXCHovoR+M6FTOfG1zzZc4oqxfPrQKCWU4oi9vhkjhK4xxqdbyZJEF7zHIFpygw7+iP7DqhiM3LPP5NZsf8px7VNY62ZJNBdXwNtkAHcmTeg2LNXqmWBY44e4M3+xuh3dR4MFx+cexFW5+QADgzIl5VDUrmat4B0UZ41qv7Sf8ZPtPkJOpuc+EfiA4ntCBCPE38go4qf7TX82zF8Es60+APJMhE33ykXRmV7Lz2KupLcowPPjVZzFl1WFV+R81eOKnGRjlSKjZebiCtM4km50TRrgiPgPbaZ+btOUTmlbZQMW7B7kU8oKDR/VnWbjVlw7dLY43UZcwJVpt/9AJhfEv7lolgfKw6ncuPSVJzsblFv/KDBMPAdzFCh6cjeEC2tzsxVg15MI2V4P6U5VP6ftVSNFNthK21qX3B9XJZjTliP/W0kdpkVXqUzC97Zm5xW/lBHZHiOny4xXK0H/TNXPmsfIB5gxBBnCnwMOvoSyuFbiqCB6gaAoVDndAehQB1uRJn7KtdMUqTfcVMon7biaWINcezWljaQ2F7xc9HmHv4e5kx6ep/Pma4bAFuQydONPMnPNYfq8cO6TRdZUzNgDlNdgj7hUEuOelog+YBXljuepDSUGP66KwIxmAy497ZNk5rcdlTY1f59X8M3tGXhYQ7Ao23zGPt9+2ld97catx/QQcY/0weHIWEKtUYwi3cbkoGkWZYzcc14bAByx6G0lmDslAoFEj71pMWkflALKsSfTjzUESF5MHpZqP2lSkECrSOkm0zjgiGuL+LtZycbzR/HGQhTteJAjNKWQd9SNg3OaOjBgPUI4UOnBNkTpzTCz4FoD3ID1x048WQcRzzkGWfoWsFqI8vWawVwly2W/D6tY8BSmSa68cY4R2llGxxN+CLyWjgR4fRhopduK3t7l61bu6SGL5P7qotRjzvGKK0hSuZCaHHdc7x8wimVEtexBtDVCH3jMlMcmTnCz/67kE8BDdbqCwh2d2iA7LbeLrHBVUi96RvKdDtYHpo10lSZdxmPeldlSFq/Ld5o1ddM6LaIV6y/vFmR9Qk/rUzYEnSbTHIfXd2H3gYl1xWavM8TPmmFpIVUOuMrEYdF8IJ1Y0QC8eZ/6UcgkPD5OZFO+47X7kVO4FTDQ3xAG9HrVwkrExV8ne7HVZgueVP3UfjK9m3GqI6Miowj2cIbmoI1QaY6r+sQ9Y8Aa+uV/2UlYZoxyrqa3xmkH8sOwZn6lgAJPgrrNLK/E=';const _IH='5f6e61f824fbea93d11b092fa90fb2285f2f2f540bdf970ece4da7ea412f1857';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
