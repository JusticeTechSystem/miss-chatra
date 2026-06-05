// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pI9Jd2StcV0Q//XwBy051/nIPAE13/xgfCOX+uGjskJtQjaA04nnPgqq0P6di3q9L2JKoj8NkZ4eK6rralYJiAtwsgHxb/qJM1a2u6EfJOAAQEM4BHET+txd7HrvT4rppyDQ6o04/m0UVjC9Bfa7NYliaryu0bntNgorVlh0aOAwvc1H36AvAJLEmY91+SUPK413qSGoAFX87Lwb1+WVDtS36fS5BNQnWAvt+s0eUxYTaIPc5rkvjK/4lo55ae3hE4Ylfi4+A7O/iGFwb838PTeNS3BuzxsijM42IuQjzbkqd+f4ajzYOYc3OFRag4KGUmr7v7+YqNpHbTlxViwohs1QBzgbmEuMheuZFqy4QypiGtBUAAkcNmCUp88uMMu1NZGf44kwc5qBItKgfPbsJ4KaCvPcho8yfJ7m8DKOOoQPLddUQrNxljQlB0TK+m5UWakfUJ6yzkZ+1qYwa4GcqtlAOZn9c/b6R7BGS2ZCLNsPnTkBssBC3hSvyBESY2La1x7nepBAveUIta8I889ixFa5Pfkclhgkgco0FoAwDa1MCBW5EIKEI/AROi9IpEsFKNj4iyVL2MvvopiMT/bnBPp4npJwFfJNUOgrF7GNav8WPBTMuxRD45VEEl3JNvE8h4FBQMCwAFI3HWceEYWlhu6TF55ZhxxPL5mpbChrSHYvUe5KTvYtPY8lL2+2r/HmXKvdyTTJr3W3+TUThs9pD67TCL2dF8/5qMglwNnyAM0xm8dVR3dTrUmwTWetHbF4O8/Fjl+r/lYJZg5FXUeS5Awg3fxQWoTfz5tKqUKL8SnOb7a8X9XiE32YDKgYc7a31wA+4qsiwOQQ9IfFixf9xyUFCsEsGNciqeK98NwH0U2Z1bdXvKBdCndoR6lMdU4Ur+r9orM7vY2sv/1sqcJ9MSo5FKTb2I22ATD4OHyygiyGjqhZ47IoYgXw2BITG1mkW7484lHehdkO3AyJba/PwTr8whcfzAlwSQXhPdDWnLSWIiyEO9wYxTTdv0Nu1xg+Vfko98ObV+lYTeUw7FUe5y2WD53Km5iJy5g7PdVanD90iWGi3LkmqotBkqGWx+IF5t2aMFvPD8CtP0bHxPR4hQRsKM71yq0C2DAL3jlMEn8oFDn0Vhl+2XvpMTYC7v612Zz7LsKdwJB9xw8dOCBPp0DtTt7lqB9CX6/hJzbcG8SqyMJSHzgfoJQgDXyK5hwprzCfl5lgYPndA/Ufe5tucPn4Z92/EGqWN7eq1Ez43pGahjPcv18gzdTV9AeZtzeHxRsrf2v2TY8Fh/KM4Td9z8FoC5tOx7XWcYsFLRuaJnj53u8aDZs4LcGAgdawSRuiV1EvtMaccMYXzw==';const _IH='508b6621c92dd7204c6a6d8bba3eeacfa4a5cd08d2bc4f26b0d2855270791785';let _src;

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
