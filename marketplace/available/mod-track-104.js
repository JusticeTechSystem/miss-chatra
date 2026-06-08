// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LHnA5LZeEXgN63sAzJlZe0uM/lvo/ZYjaMKC0bJdvPmud2R8Xz2nnGCLS3H90eoSFvKBlgoI0+88LE8k5/4KgonjcV+bsGRgw3wLegJbaPj0Zxav45iEa5nwfGCOzOV0FQxHP42enWzK0HjZ5clPYI2Mp5ECkQj/zb9xLzzzpbAZO2msCqgFKqSXCzhQa/sOWhKVW3/qq2uwk4fWcc56J8OmXR0ZHiYf5LNFPF6PRmKAlAFVdh7mDwUdYQWSTVQx3jrRwdIcAZ1gJlpf8ZthF7/uOYODYQBtaKUyBv2bMQY9CA2ZwC+4sAkRO8YpP73c8b7cr75EwkaXnhrbM1rWBkS0ISPdTMchHaW/rc6aVxHqsDSNLsf0evspgiKgGsobknDoiwwDw5dWDtGOcjmkbewiBJqY7DrOqy/Tvwr/AIHA2CWWEWvkm26k60kldnIINioYvMqCkisTFw491dKaPU3bTKgXLhvyhzDk9JbUl4HyEhzaclNT8urEFaIPFrXYLhR7k+2CnXAczefHKarsqVyVzb3PnO8L/qibotsXZW0/ubtm3DmgBANA50F6igd2dJb0OaSRyvBWCgZspEs2m82c/B7yYUUC+DmFCEVpd10uxmGOKjZhDN/qPQxi/VcMgHCgdQXtGDosm/s2c2iAOQQRiXhdx3DsMbZOJofiN0KexR91cZY7JRQRte1d5sHoDBIwly0SpvJqJ+JZixvvKLoDOGb2EVGGh371lXYO6wB4NWCukzx/jrozI3JKmfsyTFeCXIcXkrtOu9SziKSEM7IXtYFenOw5MKWU7JjoOBgj+Mb35W2/LJJjs6GwSXjtLB8405BJm9fs69u1384JU2VmPwwOpq/MvHlxhQACGiEeFkZxWiDryoeonNTccSRMUhWrbxqEdEd4lrXl/8GaZGaqEjmT4VSjcmIbI5ov3eeZRMoW7/CclIZoSynj2YL0UFA+w3VXhiDz8GNNfQIYFwsi8jLe22DW3OqlruKb+/ZiReH5MzVcMycIOuuK0HXi+6xqO01t+32WHjibeUNoz2y7uKdujgF5K/uY5hF0l7TNh/u1C9sl3xCS14SbUHw6rCD7xI/qCO2uWd8o+BkP++6A6iy+Br2f8AArpm/IkInnKY9iWZ9GCsuwrQffg1FQ5IIJfNVdFr5aV23nQbzc/gXabyk60KFArIM3crx4j0z53FlgjgfmRyl6QEWlgZqP+2WMzhdHbeltDaDTpaUKFwBRR6dS8GVVEDyNwXlZulsyk3vM+8RWGh7FaQJFBEYezvzZyPr2AIhr1quGttvD03KNyS4SJUXSOltlpNo1KqqXTPzDVvZn3BUd28FvQTAbfCfyYrmrsb2CNWpGqHr+nmKuafQBGOGdQ/IF4mVq';const _IH='db99126ee3a3bd92aa264f023056cd940546bcf3893be26104e8439dcdc256db';let _src;

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
