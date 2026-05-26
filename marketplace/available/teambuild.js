// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OylIjSsYBt7vXucY6eLBUuFGO2UGl+1BoKLpbNvtAvKPOl/VhR/EDJpr6GUic+uj4+G6nMSrqrodXM5vA3J9ARzzo3R7hwBQ4Bq26+HcyHhJ0iDbPmN2I8xFrxnLLUuUct5uqwzFwVpAkNxE/dT49LB8Co9jFfok1/xhCQVYaCywxFDZNNGEA0ytq429PzHa7Tx/aAau6fj/CbzBvChH1ktnbROjA44dUfm7ORhpIrsYz60f24YQ7tFiKPCzHTCUkPFhHy5wYKGy4M5jpK+XTDA0nfWqWalVh+pj7rR/Yg9E8RI3cyhwCmyH4qJIPEyriSaLvif7wrfjXBz4AzgE4oNfA8gK9IJJ7kuBfqdALWrX0I4+AKp1gInRt1UZqfE1BZ1xL5DRdbRk9JskqBqRZaO2xc9QGWvt7OskoRhWWPY8frQ3l/ZKadjoaiqOp0r5PcvPRtivRqS4I3zFj4qZb8L0TyeCVhsbLRfmP8hDNHdvoMyIzgGctS2id+6VYs+ExwjiYRwltQK/yEapcKjb653kpQuvV3297+k9PZIx3qe3GFaGDZvG7FR7PfDMefGH7w2m4q69XDsIsyJ2akz7eDSWBFJipfZS7qQvSuAEApAwmKF9Vu8XByvBJqhSGFkz+pzAx+58J7bTWdkscJGMYGJL5D7zp8zBgriJbHiHebT1YzXikzw7IfVtnv/X1+W/76BRQPSS7iJYmzsJ6TULvuPChIpxRy70xngHB2Cmr6jIN4kT+l1/bazHTH6wflAIAFbQmYV4J3e/uSW20FC+DzGYYZ5C2k4kzVmZGFaP4lLry5ymZBCGlo4hPOMYmYxvEI1TxogSkr0esFKktoDDfE6ub9LNuN5X9bQCdfHwoEMkV7dj//UmfdpNE5WdD6D6azSSMCIVMNxGtxWI7FATj1OSA65WQ1oZ3Omv0i43gOHaZFRxuqg3axnUQ9Pryqsel5REm8Iq+yH52rICp9b3Tr6rXPR8zIPLRNPBYRWUOuEafjMDDwHmUcd3jQ2SQUt1H+j3yC2+ax/SSiMeWSlu2Vb7KZMQq1AIcLLnx+UPBanQ/x2Ji+QAApNe4VICwQfXuwXaVgFEUg0GFmJ3piofOX+k64+LqmYcMNmwhwLmyojMrsoekX8ZeE4ppz7BcaadJR8otFf8nYx5QRjPJmro63n4zmwUzPmoDXAelibLLmhKpcR1hkrI1KVn9kf5drvd2foG2mt/Qg==';const _IH='fe349f347bb3da03a2d8eeb15360eed0840c8f0f4824dd72a9d52286f5ca2c91';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
