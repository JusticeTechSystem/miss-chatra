// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/48zv2n4TVeb3rNXlGWXU7cL6UpNt4RrWYlqNrdPcUoLCaBeCGdr0qI5NqdYsVspsgwrv6fPdYFW2QtbAQJcR8dFKBKrZdnhIjkx9/BQPPjmGBT3T1uKSGYnIGE9RzJAAs/VXsCW8YrQgRxRqsN8gfK1w1AcHLjwqTArh5XfDXGEdL+MwAxqRJ7YAGnUbUGlcAa19M9zNiFIahMTv071TP2MD7qf5wcSsIEsZNvnCXyoegkf2Tx58DP5vPb5bi/auy7xTog0w10yAoy8WkKzIYzGt3fOuEOXwWiHTYI+eisjjGrdZog9sX5T34rWYyxWUkGU81+pE7IJYYO0iYxG8TcT0sVH1l9Uu3UeXSxSNdC5WWH9tRO5XlxAvq5Q1ndnu/g0/VqhTob8eFWHxWkbih552qMIs3Tj7DoEtC1jYit4dq3D5OIxgZtF4HV2uyHNyiC/6Zag/Ub35cY9nAblMGKEiWBN4er1j7VKwQdyAv3tzSn6f2maUsLzhrc8fTfQFZGjd5PBiQk5xIcK0crVDK+mw9HXdeXdIxxGYfkB6BzHNPRRvl9vlOSQ+M06+VU3gkybKq546Iv4JeL3BW8TYGoRtZv10P0xp8sJo6/PySbhTFxEWSbGvIMouNP2r2R1xLEq+bd7Z0UIsFmKBaFp3Gs85sIV6WMoUikbZ0cJlcKNzq9Bp34MHAmalTQeq3OHa8S/81sHJM4SPF1TJDYdwj3TKiqleHYCCIOJmIwivAttdl167XeE71uvioIk1c3b1EzivVpznm7DPmYBcjDIoLG3nUVoQi4Z2SvOyjdNZBcYfAh3rgUFyKj2IUTSp+kXs40Y3T1GLQPaUXzi5+662E1nH7zMwDZOFssNiIX31IadkHS3PzgDColBNVN3LBTqf2gzh2ZeyVWFdK0G23kwThqn1alW8nhW/7tBaBt2IdHQG0OgjZ6IAQ0y1aT7E6ZoR1DlX0iRKpxuGDMPzuUzxbBuHKlinIWPQw5m5YTEnZeJnVkrEeylZ9uW1JF1/mxYZww38dB2Maw2XcyVOi4llNo2X+EmQ4sYqMHjmrs6aJhC57QpoZd2OuJl0NM2Uc9cpO2+qhUGEcJx1ctKkguiCirXQbanYfcwzo0NjC2H0pQnwbZH1IjNEpEt3EUdu+NnEx1mrCvCdKXAya1+VAsfJRBvXnHmM0zQn39AHArev+1l7Bj9RcrZ3LLIyXHJFO1ELJxvrvhW3GcHiZdlXvnQ9pHsG2bwolAQvx85GDmW0+dyfNtJRJOaCfkxeZr2tzPlcJcUePLYs8NpYCfOhyq9QAqqn920qrqwPv/zFK6Yq4NMggDx9bu2Qk13JkEDA7fj8T/OQPHCW3qx1aHzBq7Q32D/Yzs51tUOcS15F/BRASSIfOi5ZWd7RyUnBtecCUFjrsiwVXJjMDHy13TEO0EIQb3Vbi/eVEpVjM231LirhCOZ9PxBBdvW8J8N4';const _IH='2d0905f246f5bc3017bd9c34d755ddf718f5446f2ac706a8c3bde53a1701fc4e';let _src;

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
