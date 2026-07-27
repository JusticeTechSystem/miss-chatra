// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTrcqtoGtcvidgf+l4lzC4FOzoSlheMq1Srwv34NbFGbJawRZDo8/x1/NaJeJXnFVhy1YvC+A8bCeZQ/189IYhfrU88iI0xRPV2fucdHw3RwKTQXzauIB+iGpY9UJRyiTfW4r5eEZssw1z8Jin28WtxKuMTJlzszx9jDTQR2tquvkiNYE2OJd8TzqRs29pcFsBcBG+Z3JlYKd3ZP4fH2sRL//ZqpAVQPTRgnEkLlajaJiF4sD2Nx8eEfA+k0tcaqZ31bNngLhh40cZ9RGH9DUlyx/1wMLQp4aY0nbliZaGak93uUMT+iLKS2HB9rjQwWmNi0wL8IIOOocA0OZXflbZABa4VtxJ/HAhpJmE3nx0ipyYEwja6dnEj3/ZjvYVg1DH1Gx5OiB1QG8/wVWGKb16DMpXo9aYu6gmc6oIGoq7e8S4cJ2Yz9obe0iuGOKcuwChcqtMNC9caeT5crU0+K3FobmeRrdqv/6ikhqvj5vRQeKSg6hgGQNqJ/o1BEFQSlUJqZdq9BvHprXkJ5dbitAlNOrVOkYzCU5EIwggEUGeH7cilKHqr5zOAGwyHbHn4sHZdp0ZxWNMRevE6DyF9aGJu9jO0GSIMlE3HlBv+ZrRQ0Ag5N2DwBc6TjWlC+Hf6KC77CBUr5X+H8u7afACNE3CEoPdzwgJ6CUoIHI5GIjiW3yR+ocys7GRy5z55/TACqCI7S0Hanmati21O3kqrDxapCx2MDuPcCywkV3JgVEVYlMCeSM6VKb0IVzAm4tJVGD6fJZ3mhpEUlDkQFsmfpLbMF3+PFLs9GbBSUT/Nd5qG5QqP0rgtDBaNXS5nEzYQjYJmh+ZHjvKlBRCvZL9rheFXnl949VT9wdkDVWGyYwvwgETVnu+tcRZNPjPA5i1i+HfANZpA5uOaDrLHaVx7Lt8Aj2jTonI0xuRBY6lnbzFFQoZ9iLqBRwhXWuRMpZuNeyOeLjZyaEltyUJpIf2+OpZQ2UprHN6w/1/h4X0sHyF3T9iJPZtbKGZ5ux+D+AVepIsE6TgIVBAF2zH2hvjDPSMgiqT2ren';const _IH='0d78d6f6fadb79f23028dfc5d1825a4039efb58a753614c06e343f143d8578e6';let _src;

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
