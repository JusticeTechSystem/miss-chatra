// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NKzQv+FB1A/eWtxbpOOP0ZltEheEDdoL8bRdCpyR57HP3qfx9j15xQcsWsFKzcXy74Ss33TMk/N99TrjUXWssut/oWSJgqjbGRDr0JhCxQmermlZpgt6PIRIFmAly9ZuUhc1p9yPvwNwbxkvxvBXGCB47VKq0l6a/FIT0ssXA7xUnV9fBbQvh0eXEOqBQPTjusrDesdBgrCk1+IATXbs2gd/60ePTsr7h+LGvOq+SM0X4bohcK+KroBMme/Lsc3u3rrzVByDunwkGevKqCLR+l2y+0a3vlFr1X3znKRiY1TEl7o1AAkVHF1aD9oNP/LeDX9+yYz3rEz5RvCDthlrr3AhtvxaFfyutrGA0uI5h5n8qsAYqsdDXUpFUxFogzQxR+4wKSpwED422BN+pL3DViCIQAqL4u7W8GDgDwOOr9lYjPzvSwHfAf9KULAKiLgZvWXAkN2FawMtG1vSX1wuxXRigPwoROWAWumqbXvaz7xhhLmFM3ZeZIou85LIhlkfo6gwzaHx+xcFq7osYJaBWpXyJ1ImX/nvohY5AmzM89S/33XxkC78sF/LbfG2fTP0tZXk6RfsS7uaQmDZftzZINd23QW1XNWcGjvhCQNP1IFXV06Y2AXYZlMKFpKPVfMNQzsL1Nu1omEISUhnMXCobPUqMTry9dA8/kY3texBcay5d4yZtCoSCONMBNNfooiOGOB6K+UqH2QgOkx+9OhsXrrRO5RICUvvk203QSpNGGZ9zMa7y88aROzU60dYlIjabD4ETVuJCbJJ7HDxM+xWMP3Kor6J1O4SiyutD/cRcB0Le48u1liyegs8JSX8xHjjlxUTTJocGvpiK/uKtl8xTxK+8uRJJEuCyYgCny210NvQqhVRvom6MAyDlyjRiupgF6lNVulQrpiXUzuB98WJuvdO28mNj161TZOWLBM6tuczYc2Pu8AV31zfjoPE2USctn2v38oYThN95qT9Y9TZN//OID+ANCHVHPtXMvGGuJZHfiEL0QjnyduIvq2FzY0DiJ2YrA/SaC0yHuvr23w3eB3k1uewUIuif0DHoaglrj7KoBR/iYxrpqOL2F0f63U8a2SajnTOzByS6fA//6ZZtpl1nmcSFsY6BxqZl9yz+XstWd79NzX0CleymJR3d3n70Lt5VsWcAJvy3ebgIj92EJClC++slUCpB4EKgkh7LQ1Pd/QuZ5vzAblv16lVTDVKdPNSRukmfX7AYy0Qlmcl12PUXx/QQXypK9d2gFRtLcIFqdOlZ8TrRW0a4YCQWTOQ3ag28NrUeEepzuR2jO8qrsqYbK9uUZsVP25WHbexZ77tS8nilad5EntP9z17iQXY3FMcQVtTL4jX8x0UyJpBx2HIFJe0d94bJWfFrUOsGzvPIQYk8/fCGv5A0ZC7OXmrJ8I=';const _IH='a4df1457da5dbd898d458dfd4fbdd4f8b656a942a2f8b777764f9c95b2a7a008';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
