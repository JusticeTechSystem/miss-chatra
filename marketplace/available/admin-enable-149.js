// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/Hw0nvqHZuQu0MqmCtrmUFLbGYYuYXF3VmRdpbvB/idQyX5D8XZ7F6EwWE3GSOp5+XMGgL3XrCoz3saqg1+7P88+eX5nS0cgvAQcv9F20J7WLX94GqI/acRxAh57lTJrrpWJ7JdHdG2rd17KBR2EfGylgJHBzHlKmtslyCzrZIf6XT35x/AsHhr0Gy9KtPC1iPExtQGRZhicTlJgg4aihStwZk4ERUJRk7YSd43a+4CJk+1gRmSEk/dg4E1S+Iv7PWWMcDVZon/xj2VO868imYkFVBfIEunDOPhLHGknrmOupRN7WfdR0Hww1tJwxMzjfokgfvDO40XOw8Qy7DFzo7ppqHL4LwxJZf8+I5MRXwhgarYfe5ltGIsW1gz+RgAbSO+TgTbudHjQJQMNi5tejaKmHMgYAHQNOKnfLk342P7WsfadWDyr9WZMj01hEOT4mmPceAh0q5v5x+9GHYnAjgwDzcVIeb87zkmZWB0zJSus6jNUJ7JwPI+OYJB9jscIWu0B/Xpy2eeqwUkdrXsYl8+K/7X7pP7Dw8EBiJPuGjDtRUAUc6P4uJ+oLwcLjGfv385KGAdGXGooUoctRlM398tyg2oCfxvbLL8hwswY9ljCFhdzTvf4HxqSCtBEYiBut4O/MOXE4PcN4G9nyzFkmC/KunSGlkAOR41Oh6IuEzWWvr08bz4aSLWhkxDejJcnItIvM2tOiSPT0IIGHSNhjOppn/2yrkpOp+WOY02ChzXItJOT6Z6H87Z9iYsNd1rlX3J//jSGMwPhG1+k6jLjDkfeo5pz7Bz6o8u+Gjh0ziRVHMNuT7JeIKKK6zeqBDEoQ0nRBzCHgD8+O9DkD5hJf8Ow5PQOmgtneSZGxR+ZjXbkHTyiCvQtowmlZ7KLmk/EF0K8lgQLdoXOepVT1gPw/lUEEI+kJcMH6xmwX+CYwFcqyCPrVnwQG32mELI3+MTUrhA/X/VKP0k5JJciDOb3hoAFJjxX5O+UP9/qXk3tj/Nl7vLDF8JuwNM8DgV+vFxq7';const _IH='45502c28b4e68c2dfa9b4e9b23255d386187f160cf11c21e6b8b736eaad156d6';let _src;

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
