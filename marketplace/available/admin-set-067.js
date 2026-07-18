// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpzoKFGzrdueANcs6akgmq7m699x/LogojGV28BGAcQaTr7MeMwucPnGlpiS64XW2A4BhblwARW6RLZXm8l81fzfVK8OCmR6EDAa6e2uiB5WRY9GnwCjP2AAZpz2rPR6cqjKTCONqLS3O6EMNUu1OnquBlsb+xQuicgbinUHbVYbcm/XHaViQoDrquAbB64kB19AVJ7DIT0bGZCxI+0serL8n8lOcDvMi1PmrIMqPlREUuKmQvdDuw1qKeuu7uchtfopezAZhfmPPkaOeCDkZkyQtDFilQOFe2aGRi6Xl10aN03rN9dyLniMHsRFf9ITm90ih9GNYEWI2PmwoBiXeJXqXJNJP1uzkbBe6evU1NgsigmE9oaflY9aKVpxMwLQSTUbc4tRTZNisZAGcy9B3o/j5xscLWaBDePQ9kRcpBE8COnuqytbx5Za/dJ2DpVRJPVCCJNxmUFRR9ENSo2bxQQEcLLm/mKa50UMxfKHozki+F+lTwiy2pi/AIzaV3tReLb8VygegnlGWNu0cCJbduRstgst71cn+jfxK+WskFWgxF88LNnTLhQO99F64GBke9LZ5it0yqLu3laPZlaO/X4nyZinTlMpCJX/3OAWuDzgTz3VnfcakIaGRt2b50b/ViPQ0GCLYflb3uVM5DQULgpR0JbpcHGlF0/O9zwbwn6fuwHjtAAB+Kje5Q5GL13AbQyyhBCXcKMVs0vg8v+LfLhRazViv27QwrijG/ulFiTZOyfVvIO5U8YEP6yeDvvVvUId/QvR1wx1G8SBloDXd7nYiDgkXIykE4cP77gPy10ynPcuL2aooC7hLgK2LQvl98sWuDenLjUwtz8FaKYsdpIgxKTly+KVkPQsGo5dnXwCj9GZGjVfG5dKieGpRUAsAPzQ2nWmEQ8jG57wBZMfAjA+J7aliqlD/PhtIPYHKwHURSmOzoTe6/O1C4UcMrGWIM1VwtTztkaycMP2wSSlkuOw8jTYe9zbI=';const _IH='37c2f3684b0cd096f5af84fd597e69dfe7f20c97b12c4df60d20e1e8f785756f';let _src;

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
