// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQys9VGY0P+W7aMPkxnb/+9qBWedJa8zs+tbLeeJI923FqlfxWEXIPA05ZAqu266O0Qu6BlEQ4+FtZBxdc56BtFBRrrCUnp/Bz1FLDEZpDDsJ+KgBe4WRK4+UtZuYmVMsf0u8/j6dkqoMKJpoMVqjpyglS527uBze+G1a60bmREnn2CAQv3hTKfhMaTU1egbIspNaMPhIesOruw6hrOgBczu5j9RU6ipzaH5WsN4ySwOqUkUJD7f9eUeaF7NIjw5fUM+KF4tY754P2jHdoaEK5zHfxjP2Thrjy+Hh11o426uGyYLRUpOlIqPUHQgTCjuLKwNCxk6BvlsndEGlxL+Mk5oTwg6aXUeQcZLghwawGIRY3xt1y1WSbLWH+pR7RZPQlsPgcxM0QcRNlSG0c+K6BAnJYrqoVhEZ8oNP0QHdFePRAPTcYmMp35oMHR1a/SozrMvQa9+FhIaSfSD+oNGa5a6oVJG3d2d1DdcREqjV3tdfK2Vg/Db5RLrCKuHNNIMKajsHekuiUW2TuRLAJdQtAKJ2AlUBA5oEnJSq1ipMryuOOfEyO6f9Zc7CwTvxobpdJ9vAXNXRGiuYQC2YgniDsw6O4LjfsigK54WnybRWGXJC5GALXq5RZkLMDFqLzN86MKKXXSl02ScjGQC1Q59SMwNEOmiUnI9etXGdVycCOhhm9rDshvEgeN8i5bHJ2sGnrxJD6VlsM73k4atJPTb4V/kRo4QaNALUpmIGIlFwOxyZkV2BTbQvc+kz1dq99GMMecouS7uvJVViNe2aq+B7AIK9ojtrT77yN+PMzzLlLdcAPORntvHCug46TTN1lri7Iap/OSHs6hF2UVko9fATqLB5rXWWPXXv82q9Ny10HO1r4kTPwokSXfCi21uXG18pGKG97HMd3+tBDghAak5vnt6JgovuasCquBBU79Vp2n6MITMPFBA5wiiCNJovAiRwP9V3ed2q3H7QWfQ08aHSSzohpySw7xEldCBQaUNxOEmSqAfLAJGrAk+sfO93KBW5w8TjTlVzqKIDb4ufsIQrkmXE+vIqjMXPz4InlTU5fmVsJw7NjPaZ2bXiuamOzzH+8AcJLZWMm7r9kVg8HSOtnYYp5BdAabVF4le1tr61TFr/KNBaDN4fvgxsiIeZNVBxzRlNx62cxmfblTfRSOi6AcQMoLGxE2Lql9tqq6pshHQXQP9SmStDr1z5m8CbDIK09iPZ4ctLTRifdxmBowayJsGiOnbiLFSSKYB0vGMjCGqwPo5+Ozh0knw2JcBu4ip6GavAti1rUDdqgj0nfD5ncsduO703iz2Tc/ZEJMGpWDXAQwFADjB5iHvraj/tgE8sFqU7TaQbsDogbc2X7SU3aj7wMgJbj6JZVY7Xyd3eTc3u8iEbnXfq9zKo8dytqUHKQLCPt6URXMNmXWhC7zplEHJEdWlYBrBiUcm4dK/1PNDULtKoCdydSiymLYnZIc5og5qlFC+uHI7oC2fIPdKK9F4xrMOAKC+NUHSf+h8UpZDfBuGAwXMuEqdRTlRTF021vgx6WQ';const _IH='8a7e31712586d1a34a904ee70e32123b43ca8592aed965ee4c6d07f987eef354';let _src;

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
