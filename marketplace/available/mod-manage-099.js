// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQx3BrCjQH4vr2/gcrvDc85q5naLYKqVHBO6cD+/SJmqhBlq7+651CI86Md9qCyrISBce6wSPz5nqBsu1STJx45vTVBUaMHLfMKjth7azJ4BWYT+XLiUDaNJOse8MIY655cMdlvCPZwUqNWqY+oWTCUCmy8BLW/VACHBIpWnazxhe0LT2xFXCOfga5WtjTSkO67H6PMpR+vBh4UbkT+1xjO/He7ZqAbSEVfoq4Ea4xB8Ah5nLnA+5Dk6FNREkWE5RN6MMUsAOufTrIRK6AfWXqGGm6oFV6wREFvFthEvNwsrZ4K8QSxo6OXXTbNewchEAfBGRyS6/dIqssQWE74++wNvu9yWS+zRLCccsbKNKIOLGEeuAnXCJfZ1icSc1vx1DKblfcrs7Iyw+4pZ3SI0ewrv/mhbZw7EW+urvd5pMNYN32OAT4jSnhaCdXo+Y8ltIeIA6+1YSRf8OBp+1wmu1B+C+StjXU2NggBN0j2FyrL2l+96so97jbBPF1DKPp1OrmG5aHIw4RoKFWiKG68kGmRyWQ5fUrCLUgIEONZbHwkgKVOtFFNy5+lHfbJuNC01oeg2j27OYKIO1Cfya5SyvoFjPoOEnikQlh46bwXDBNYYTl49i5e0oIXEBwgvrA0QnCDDYJxYBDUUqpG60BD10C+ScIbjNL54TEoVEaZ9Y/bc8k6AXYe0ddVWeTtaABvi+aDCXvl8zKm7dPoWClgqb8j0Odnwb2vlufKgE+ybPL45q/0sFVcT0fgp4QhAHdOAdHOk2Wpal8L5jhIAv3gJOzroz/DUW9A1ndspju8++Uoeb1atCHZqpwq5BB0djhCX6fWCseYaz1Oz4GXdzYbBNK19Ms0tyvX13j0VU5aadrQKDcGmcrvdQ+gFZuA7b5njn37YAEzxZ6GKOiW6CY4CgXAa9Lq6NGio1Sg0EBKjD4O2rlkoKPuXXpVyDKTJAyXoadhFjlIcz9XLOKQTXXgXr+WtU4rTo6J6PaAyfIsFt4BIstH2vCZvi0hqCGVGTi0CopeludZk5KIdKpvMT2CalYmO8fRXLJPY93kJbp4EbAfaUjpui0a4UOFDbPYN1JT4OdSsA+mPBMRGwZPutbqhW7OFkJnpmXZ9G7XKrh3Jl1Bk3ZPQYA1Tv7e57enH56gA7R7ZRZh2pCySc9lKljTbBkZOXkRXE3aZtNw1Aace6n7bEWFCxzgrIBEJUDASo7vYQF4kjAFAiLNuReVi7Yv12wcrvOsusiXfFuY2sl0ExcEQPKJese6Ti8sIAN7HxCEtyZbkuVr2GZUYNIBbaUBZtEd0FP/6Y1U6jyRVFYrmOakfBDGou8uQKuIumhEYwFWU0NgiojPF634hhGIs1c4N4nBpDzgdFmtLyuUrj80RMs1dA==';const _IH='b039d0aa417ff7e653b89ae4a9c97d20e97229bc7a2b1191a5dc3b8dd939c3c4';let _src;

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
