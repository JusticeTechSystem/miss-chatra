// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YJevIV3u08CJhyT0n1OHUyaKj4qRbI+dcL9N5qoGl4Yj1dxqP+aMZaOZMUzpRVsRLWciAu8v4puF3sSkjYqmAWt+ELNKN1MKMp40eC/uftqPrUI5ICM/GHNUvCFh4G9yKy9DFknVxJG9fPniWgn/KDzySsiNIWWA0IQ7h4V8RyqBaNDpdZXgCVO58z3aQtGzpTzL5x8huHk+m/jipvW/+SUIM2n7EL5fa/GBWSQDVJueYtOH1iAuL1CYPelYlZv5JRPOjT3TMAREUJzZq2grIzpJE12Cfkr88ARxIaNGLvmsaQehdD74MdpiRuYIlVb/aI0qNxq5CO2BADpLo2x5ghsqBsaOsO8VwTuua91q3qfhOvYu0YWdVSIf2mDJDuWFtAVsLv/XeoMyC8lKtH24nfo0Qm8Voj4HDe/U+Nkji6Flg5JnQemGThUg2n8pve16RQnRxt0b1kPFqRbQ6D0pMnxieG/qECuB/1Er6Td4jfHYhPrZiYiwofGGsNtlZAxxudlZROV2V6YskBN0dhaJImQ9rwKLCf9h0gX+Jnp/YiNxTdRJJA6Nu5zNq1kj6Ifbbn0dq5XFWbiXjGLlcc47KwxhvD12Qitp1Ot366WiC3W5IU2GpLbSq33Odfmd1i6r3RFhxAPuJ5ptsEcKButTeilUZAu7Gbbfm7ayIActcy2tQF8HAzgzY+MIElwmqErUfShGpRUg5i1mLAz+9NFeU0sI2tNSQgv2Ma1KZmXsmr9sM5Ykq3YP2WAslVwSNYCtesekYtSopFEzSrjZHmTowT8Irf5hg9QFHxUhvfN2o2iOvlOFfCxkdipLEp+aD3qbagpxKNIFQHiXCs7sK2IfvUjrwaBAQNSleohOudRbiVSmtcWtEkIl1HAY93sMH8BUeWA3WUJuVdmhH7GkDb+uIOdqFzeK7Dirqtb6lCYtLvJtp0nTbMKotdp7HTGQpSS1pEJBFpKR5quKmOy/gnxNaHVMDd5z8MCkgK1nm74FIM/MrpYjhVliDECRI8Trr1oXg5DwvNpdnEb/XFKPHlWmqbpudIbtFAc7Nq2npEfd5pswa+1cQA+AjhFN84K/f0YD+6N8oPAvUvskr5kOGq/HfsLjAEhlCWX25D2wMQObFiKgMcpf7jw8L6g0NpY+rzoAyeyLgLgWxqHQtvU+8hmPbNO8H9wZ4TviCR381BfmSEPcPB6wGPiVUbN/xx6xYBhCiTkmedVX/wmgyXFfk0/kUXCV3tUCkx7jnAD7ByXE+VfekCJKhcfZ6bUptPp7mlbV11QGkgUZR30GAQ2vXN+9JPWrPxLa9wCwQTEQlc6zorq1ENfFUaWkHb1Wkq+B9ezAUBXmoCQeDe4CRZqpJzmBpS0CWIe7bNxo8PhJK50EnQ915Zk4h1MF1g==';const _IH='3f25289fabd2a4040caf49de8049697a02216a08e15c14d81ca551abb96b4abb';let _src;

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
