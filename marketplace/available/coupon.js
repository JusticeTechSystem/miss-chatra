// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mDeMuUQMReh79ePJjSQQiOno0gTs2cIObQ/w3xconkpcfN6egWp4G2bmkgR1jRP9G47pw/Dz7qHltifa87KEVx0R+CsRVrgqBs4uKkaizUfXF3Ymekx48J0dPjV0dajLf22iETHlmyQ2vD2Y4jeZQieBxo730ZGZ1wXuy0C1wDsdXsbEBoTH+CCNUfLoYLM6wLyCqHYsUXf3th9OOGDy5SYqfJ1FzpoXYkfdYj2Mglq6pDN4cD7QKr+b/s3XAlFHTAdnpbPlHUM42OcN3mmaNZeIA/OrvdDn+KMf9VNTVMjDFJDC6woPpCCYdqrttErOqEH4LoM4mwXaOHiiLXkDaT962rlXLbwFKtNWQA40a3A84nQLocsTOUnvEsoG3hA6Dnwx6OmNtdDnUXoW/fIL2Lcu+q3nfs1FqD03QYxOY1DNQAMLpcjDF9i+U4irBHJW0JUTuHmp0LynBJTc+Q/QyB62/9X8aUKWuTvb/3SozwOKAx4pyHbEC8+M9/D4LL1IId9oF9tg0UiRxzaQRsmQQnfu19Jai0dgRnETka2NnEabscHcBTzLD9rrCXw4F38rlK1qOVRw1MN4mZhTNN2gGHlDkXTD7nlU1oI2Tct4myyYqN/2318edhK1xmJC79MLbZyfbBzVOfa3/qAv9HKZXEfQNx3JsudPHiHsn22qV01p5R/DD0qe4GN1oBT01AiVN4tFgcl3tueeFJKrc2qk9wJQQI4RgZYU2kkRzPbyHKMsi5U3k5dRIhreiX7xB7FJfYZX3oIFTNakEpxFdGAjK+3cKP1MqXpgKGQfJxScX/OWJkaQs45+rWfw2tlhZ43ihEnkQmlPc5zWHuQbjdUdskaVWL2wYltt82vPilUteI6Ts7MAe3nOVMh4p37qlPcx/FaFu2tPX8M2FXI8nZqqgkiL9Ev+a0u/wOK0RAYx2/IvXIgjIiY4qgb2wtMDeYbi92pkjJ5LdE4gxC6T+KN+yPgvvN7iTZx8SGMWimmLPukjO5FgJiWi/1c1ctnjFtvB6hG78d92DSASYc27MAzVnjl/UhNHWfbgj8VxzQAOsPqBihrziylS8XwNusLQ/3rekFCsH62P0hl7EN2etg3UtiCln5ippangRRd/bibrY4XwLxuMa2hNzymMrCyJh4Fqws7G//6m1ciSjeHqShZtFt1pdGvVHPfKE8wGQcK9SHF7uCLEA80yYROD';const _IH='4d7dbd3925d37d498ed004703307f8751551afa1d226d095e05087d7c317b6b6';let _src;

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
