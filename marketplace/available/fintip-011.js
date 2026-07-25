// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQdlf/P1ucpZj1LRWqf0KDs1usDzCl3fa2u0CrLTBS8BhOiNlqFgIpLShVed9HAp/wXkzi8fnHzsqF/p/a/+OYrHX4hf+pavif1AjP/TnNjQ2+njNJ598mTr4MOwc9u3zTRNH6ViDA37RAu+MR9nKE7BRbkqbZDJ4nl8Wk6HcuYq7afsKAsnykeV9cTYBLuDk9sOHEwsvIszWG04rqenGML3ed9EdS9jLWWgxt8T92Ee9JrOytCg6h6/9D49h7laESTcQfFPGabXfc7qYeEsWX4W3DFowV67XkFGTeg7NtfjFWSujuaUMhfvs8BBnIkUz6QlvNnTePgc1vcYqfdCQVSo9smyJUHLYfmtnERrg4AjXbsQL8k6bBeaXlfWOj4bP/DXV2W5bHrldap1aXLXReg/d7GsnzOdHg1MXSxMIIn55athXHhvv3yb+5YD2EFMX+BpFp5zWAawQV3Kk2UX6HXuljqehhzGEy5zvNUyaS/mNqytCFO8nxI+rkqYnkCTY3onZttcDSZJimnnly3ipTTBf1rtdo/bnmKhRYWg98p327ttaTBXhsSaftLnt5LJavSojmnBbEs7LtHUb5HZD4bM4gR4ZlwVAaY94f/zJrwJk39Vn7eraeSwJG1c5biGSkZskrL0p5uP0SlowDHDMbNwmwMnLQQ0e9SDd9KbrZhhZGYhSSXowK3BMdaoSeRHhoISH3IXFXEXVfJXYDPx2IPuc50PgJZ951ECs4wSkin9Fp6/38YBozp8/K8mnS73ExCYzMlocC4iU1cmtKsmTytXPwAT5ByUYKTa9oRwPz3iY43jqyaZqCtzGuBHrbGIAVc36UbXtTYdjbBSxGE9bJeuEpxqX/LCi1sBjD8bZCk8MS3QL4gTDuUHHMuXmakeRGMoawUiX6fvmsBm/D3rBRncK3oScVGHA6m8M0/kSgkb2DbHGPJZPUYpTYt7gKss0FEQQqXNdiAn6apESgL4qtej/hi31q3rI+K3tKZeIsmlMMY/NDiMWYpMmOvhTfkYMEztV+NvvY8yODjH5f7AHkWTU3pdJVKFGzed7cm4jVSea1U';const _IH='016b9fc34a3a9ac1336c67122b4c4f16142873d53ddad16d3c2948e007510248';let _src;

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
