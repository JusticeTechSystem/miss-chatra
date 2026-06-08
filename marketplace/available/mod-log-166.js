// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N5jl/pmQVDsrZYVfQbXXgmfN6Z1W2p/r50/Lel2DlsTBf+ouc6K/SzkqrdDZkIj/aDhF96j9Z7dawoQ+bxCJCZNJxA6KNnECVbwhs1p5skWwg+8l2RuiKzQxoRN1fTIW6etaHTAcchDuZveMavsG0SCjZGIYzw3e/c5FGfE39m4oTF1x5l9bqfqHrD+HSyKgbMSpHCD6wLlmzugyPZR06EFDxn8WAIvNVAO7V5zQxwxaqJqrx9/NfvLEhDxe5DFNRWmyJT0jdP/E/8CfAT9jkiUPT0UF2xQj7IeYpYYjaBD1xEeRN0LyonD6c3MSYrVm9P/iZuT8OzwL1EkXtLS27+PBYm0J9pnNFPBjSR8RJaC6RhrFari0hpd90KkONEh51I8khlGlhICztU5Mv/fyy91BE0Lp9Y6NGHTe5dHZXWkacct5UCdha5WGVfXVNN7NRulXAiHNmGtqptuzTo1q3Pz0kA96eAX/R1/eTUyd1yY5rzLSpcFs3sIBPtytTSIZ2ALTkGqEzKHBgIShICebAWiaePqgwZ/VKvLNTH7GSug2pqZ9i6uyezXuJSuJOFuBRL95PtWM27RsKsesuUieERYDFCv0jjKi0wB4rqRBWE7U3OyauOYGRwNY9NoeWiSTGS8wn23Nnk3Qs5FFIZPnPBvGAqlq0jEUw2abgeVtLiWW8WJp/pWci+VtzRVBtNQIIiyoxfP6gCa3y5eDqkURXQrmj1l4PZFMCVpnpnPyJ1bf6qW0I2Huz4FFz0kVENPU5K6bRenFiCEpB+go1ZdCW3/+yd/xMr2R7b3HdrcugKHCoGXt8mLIOXWItIRLniA3ST66C+/+NYMmRlZeN8M1DwF1sy6B5Mh4x7K6ILeenDcR7W7783MuV5auw94eXwKiMATYEqFcqC2/IOOjTaeDXmT3ugVKE8WYI352PGpUAF0D+Ndd7kHHCEuL125TvDAxmh/5zR/yMdfwDTvV6Lf4xWN5233FhshpwI0A+VXvOB4cy3XspkCoUyaO0xF6FWmy80D+mAsxL0ljMWVkdwJrrcTPeT0tecCOOU7BQjuR5JzDPJ0MLTZENXmW92RgrxLwMVt34p/HFuxu8ck3chuOExE7qUDiFJpqxnmpXFkWb2bvoD4fg33xwQfMSo4BZqtu90ZASVx6zaX5BzVNIFfJxi/GE6KJwcFs0VSL4zvGJS7NHsomg9zyi8C1E2gClQCXGFvqYH5cMQCRPmjEbmqbfw8IuuOsnogOK5XIOPLT4VufiX4CNYV0UBmFeP5sBh9PLgQom9e2mY9q8VA5y4QXx1Zzm5l6/RB3GO+9k4l9pSu2x7nAET7FbMqCadSRjuGarhyACxhfqu2kww==';const _IH='da460471de5d26c2b67b30343ff11b5a89c0d246f86c9a20eba0018a58d33a4f';let _src;

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
