// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQU6+UAo+TNXh9MfrzGvDovRZbicHcdv0XaiKaG4217hmHkMnGas62MuWxm/fluFiZ/RooTZaJbyr8tWg3SuVu7IYDlSa3lpZatDCG1mVqFJuGDHyBVbwApD4D8Q/JlT9lY5PvWjZr6ZpgAJ729ThoiEl+KjZRO5Awzao4TgBvCCYV8TW59faN1FLpfOGODy+AiGneor4E4mswAtlu25Bs3FFPxaD2x8FVVVN1LNMLZJQMBU3xdt1Moy5GC79ZIoajXvdrBXc/i8L1zSIQbqLb8xo97WiKEAR/msAMqT4YzLo85B7L29rMHLgcCc+QE15zX9oZG/61Kv6LpYod7L/2lIK1yuMOjSnaBr6mlRcQbY9+dvN2BYAzAGgYeJhf4rCii1c8Hioap15mo1ys253bXREh7DCaCyph8cIoSufJ6V2EDbYLE/FgZJOqX13T1yGubjA/ooS0/0gEpCxegldeWYGz/1Aq/+l77MDMHaN9kZ+yBEl6AsTqvk39vgoQcmkNl6U5VktPep68CbSWa/ohMN0a/+Tz/H8/H/9pWy15oYkDs3Djk7x8ME3x/42GUSWXkW47hrDkHA2tdMOPdsX5TFdSgdQyUJALLlJxi+6u5qCmCps3PRNVfTE1WCoCRd9s8X0oVcHgP7BURk8IfZAOLZR+Uro7AkrvpY8sCods4j0aKCA0vBel623WoQB6fc0GR6nwG5y+0Np5MB7o18tEVgLg2skOeH7pijNzSmCRVwv6V7PBaYDzbsONndTqvoefJh/BCwPhejtWWn4KwUkTY3T6UZwx8JwYHj0dmhYnSfpPlWazVoaZBOWa6BsgCuUAearYuv2n2/dcC8GLnnnTgU8A0w0/Zya/5kIQNG9qCYWBTYK544G4cNuXLUsSRz5AhD06wZZZY7qcmuYOykX3jm2i3wRnq3oY/ypXuehCexzaUPPXBcxHpULV54Hs3fq7QUum5ITgY8PnvF2WHI0hptztkg3j/kiIFLRnpa1VA6kdHXsSbi8hSccVe8+4EH/yMKUEkTUw1Vc2o+NWFtVPgNr4x/RZ/cyFkX3UsjxiD3xop05tRDuo/LyjvpTkxCDSPGdbDxhSM0ryp8mSiHAjehEE78pJALSv0V3GPHIiQd0giupOBQAl7KGveMkCxk1ydzcU30r/ETsgbFm7aDbFFE+qK9gZv03PIu2pOsKAXnMlgvDEi8UHerloxEmqDc80z3oSVGw+veJiE7Ht8lHymDuhU6WzkTrk6SHWivOF8lzEM/49ndjxktNjMkBBRRRX0DQGgRGRvzJvTsI/TbrIl69HFmh/1kkHsBgfwJxte2hTPDHBHGSOPtarWczSLM/xprKhmD1CCoNqXhdfTz1ffTei/8pkfJUmdPUIJOZI=';const _IH='616f3f0962c6d1a0beb4d608fed46144e80978445340cee42f215ef264e490e4';let _src;

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
