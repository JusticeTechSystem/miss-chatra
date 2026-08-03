// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbIqUkD89MVX2TiYkpin6Eo/3rZCASWb/bb7ygBbsF8nswpJhIC3sLIiqTogr9B4fLgqWzXfwMIPi9wL+D5QOumhOF/YzZeBWTsthbTAAUe54Mz1357ZHwIwq7fgqO0OdKRPQ90O1N+S+8v80pr55G3/2/U10pdLHLpcBsebGnJIX28TGbFBojegWQRL9SwLXq3ADfz0XKh+tk4G9nW+lyM6lf+MaP65BAwbCEYlXY9GQ+7KM0vzaWSVNlxkns+lIeATCPrKoi1ZnLbJfhXPMOTfFqF9tLyjjYHTvucZtql5bux+Xb2HW29dkxRM9X7q5n702l6z7eRhBDB2mh3din/AbZWC5bZQ5p2Er/PcR9sT37RnvzIWFU9X8AwS7ijupxRlHaUs9kDFFYbytn0N8U8Qf4hdRjOAbfVW2EabmOoxQPkgMkaDnrjkd+Lp4Qo4c5WlaidKUWoXEoYLEqkKh8eMRnt0GSaZsNZzZpBPTIciSaIeWGwQ8ERDuOXVWyQCnG3lM/3dlOPzbP90tNAAFV34/bAFYB6vKFtIYcPWVdI5wmMArL03l0lEr7F5SyyDLuLgrS05lFJWhrgqpxSZHylAHQDtyKT4Q5gmshQ8+fqZtx1gfO67dEgJKEISmAjwY9tcSHMgflLJCqrWdaXVqrnQ3DUtgjAsETQgmoQopJPS031Dwdq2Dz3eXkJZtl7E/etv/OugBGqyvn5IA+nbhpsedbskLK0alOWcc9yov0n9t5nMKk2XB73sZzY0dXGkFmqMqkleRtoywx+sqOJjzBAM87/26pdBgSqlN+kgV6mW6/sweV3KuWMKbwkJKYobJ6BoZ5f8t4CjA6OG8ARPqG3snBmDS7bo+d7IAVOLvVovavQnlCMe+oEu9kizt6aN91S2cF7CF07hG8qT2WEn3JLIj9tPQ2QfyAmqtC9v2uu2Mmeci8Tk1r4aqQx3YmMHFVYgRUQA3HsEn1uS8OrDu41sFItM4r7H5jRDXv4/0dGkdZ+O/achvF2OWcR7sRAKQBUGOrsr20ZbrMPERwk0kP1hi2+/VHikeAtvOK5BbbFQtakEL+gmVMtKqPV8MbEEm8qNJWaVpDTrEPdh3aPZ8BvaCwHMDkv2DF/U03TxXN3iVGz2FIe9V0+Q6M3TZg/dOe+3AgzxnaQUvXRV9K5cWCyhaPKZVi5OcU8OO4irB1LkeF7ch29pVTzvb+sbbLdMCay2eYrW/+z7oy05AtD36XSELjkTaqxIQsDVt5Xx1HIixCrWXxXxX9GxsNI+HgChDaZm9KzT3B65P1sNambVsMGHuGQBptARM3TxyPudRpMgXN20D+m1a1VfxAQNd2Z9RazjcxNqXW0S2Gsg/OrEwYAp6xkwprytqfbIfHAbtVrYjtPVESDxADsGHbeRLX69zdJbZINZD/ELFycGuOR02wFFjH/8Z64gOS9bWcTRAZ3sseDjiNlyN4Gl7oJCKUJwg7+tLEwAk24ia5UiQZp+6025mfBr+rtqgblM2Hq6Kau7oJW99FVpTSrqLQ9ynGqlnPm3McLZmoK06YJP9k3QZoPsIt0VulRrTS7eqoZ4U6Go8xym/R0MchaqS+boOYkHbY0gCohwtHcGHzLbd/zDiruasdtos3YpcGMjNh7uYbSP1rjA0xeXF+5svR7TuW2k/BkJoe1cAf6zf0IhaL0NhT/nlfr9SIyxhNp4siJWB0Ed8zATgSr+zNA/TVW9RecMJq8xy9j5DPuD2DwSZDN3XHt5qAqmGxk3oZ7fzAt9VxE7rMCM6Cmal3ajyqVmbyOt9PTagZ0l8Y9P8L5AEQLZNObL2LXePYWQ6wL/fqAkY3bZc43pWeuoJg7A==';const _IH='e1ea80513568eb08bed491c5b78a771ed2ef3cb3aa710ed477824f212479c107';let _src;

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
