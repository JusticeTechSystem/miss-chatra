// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='duIi35hbxum5lmXMpRCFhFJI6iEwCbxfiOtX66SaXx9DvUFdhTJip+ULAf5Kbu2nZqLtf4mJSuc57Tgb3GXZEYrXP+TZz1KOi1hKkZRzOXLqp7nd6Aqi71cf83dBgi7AsPxxq2vQiwjjN2g6hPqZiRUWPZF+egeuF2+0+1QdvWvjYqIqeqpgCfse4QY8JeClBtrY+0ZzzDXmmRtm+VURAcFSzvHXmjODc3/5dWrz/XiBwZusp1eZtZhH/M7N9JXEm71PXZSLXPQOXDMIAVnJhK6ElS4GFZdKBd9sB3EO9nGKggY4BuHA/awSPWw4r+jvTgx0HYDn1ay5jwD2EVrayagepEr+URparXXts9SUYPREdfznvyJSJmiyBt6JkPhdxFzXtkFXUeQep6D6apLwYEF7Fd+Td/BqIMAU8hgepm+IxpoJazXKfmqK0oQujE0Va/Z65xlZMA+32UA6/EGXZWN3nK865pPod7cn6bHIlbCF4qSZ9FkWtHAE2fBrMvXmsgb1RL5GiSdq+dC5sfK7oeS8dOODIzEYljvxd8/pVDf5f0K1GUXJbHij0znxZlysTHleRGL7j03oStGInFjUCV5xifl/uav8q/AOjnKkDFCjDG/sTe6obJqLtsRsmtrxtiPjfdyqJSKk8XRY5cw8X2slmFXbtu90U1YnyPdBpR/fQWAg+j5NRQDwqmEqXUhwhP3QWifiA2fSLnfFJgVjOKN1zpQLYid0zt50MdOOs+9wv+ab9jXHL9GgIGXzGI6/ZN6eCEvF2yFK9E8I4jMMl0vXC51D/lw+2KgvSbujJOHPQbe6O4IEqum/ZJ4AiCSnGVWZe+cBdZ/KCdmaCJpK9itP6gQjaLzdcG949MabghO7+sCHAjxmzyQqGxJ/sY/iqcOgYg9leR5ZUWNxcvkz6JQRwSVZrRuVUzzbWrC6togyk0YflEoKpKHwdX4ci4+UB3cwNJbjUgxX+N+bLrAqb1P+0rGWsTxk634O18eaVfi7QnoapKjEUHHHPx0IlwTxx/TXayi+K7xsELPlNlbOt2VxBlcoU/w5ubCco+h1riH9OeETjpVMBtw6w1XkDhlLBbUzGRaBgYE12IhahoQ88OMAZwJLp9D/rs4oYEyar1eV5O6+uMOqJuWRrg2DxUaZ53ydQZ4Kh+qhic9nqmubyUNk+v9ofRK/niQ55BQlBxEm0H5NhaZncp0XPCCPQOBmooFJTpKVS4irA0pe0/EeDrz6Od5MvzNVouxVe9/ENaXKgShJUEkdfjXoInnWk0XOsm4dbRCkEbpw4J8sdvo4ILNz/FB1nb7Z0NDkSbPND4FLKqCSkrUApCUeDejY4aRFseu0s+s+BniMva6J55HNuwrKSCw9uR04YzDUq1cEsQhkR4Hspin3yQ==';const _IH='2245f4da89dc508f63f2bd9c7b04800680b79697094178a64c0cfd0465ab9360';let _src;

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
