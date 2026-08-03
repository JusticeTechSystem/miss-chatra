// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJw0vUJGK9YaYHXC5OcA03fhd8pzzk5+j+C4icwedjTbcRYffA5OrGrJQeaLHTJp/gqV5VXiegc0VYjTwuEeTUYpbk6hoyoERXWPzGST0EB44Nm8JAjFIjL9pTIrSKr7QyfF5lRfN81DHf2oAkE2tljV6Oa5sZmHRmgT442C6kvXog2qVYSIYIEAYN+Fwmlmn5BzB8q/sHVcRcQvo1h7CKAta8gBrUb7iVvjOmOaObg/FZpY6lj0Rwd7v4F/r3SUP29YCCaKFLvfqcdZzUex4KdHaR5IACnKVnuWERCmrViOmvwUWyjZ6Y6S5tpWoGxpdC7a7/XCJyj15eGSni1egRgqbLZeYHmOyNSxZA1RfUABLW7oRvlD46x3EcQ1eKwIQD6Kkcn8LoubY86uIrIX6UenWWgn3ER5L2k4UrAZFxIpKEj2MhUtBPkoecaOD6qjzS8Nsk3EMqx5Q2tdNZDx0U4BZ75vrbnbW63uj63RPOTFTjV2armhanBYLXDARBRj47N8tL8BLWrMBnzBJVAg439TN/ILB8DqInF6sHjvaRasg/HkfnOYD2ewCp3mcWn6L5RA7BT4ZKaKFjlRZ5uah48L1ipkttW2L1e/7YtH1r8qj+W6z7FSbBSorUtTfeeJ0d7euCdi17SKafbsow6ERKnc8Nw6/iIv8UwMfNUMn9bgHk8ktwAZgMoTAeqnv5529pNK+Hf8xaJ0hzzabWlM0Zf2RzX6bvcd0bwRYNjM8fa7u9fU7pqqAO+RE53NZnlYsFpR1lGIWsHai2jEJ+I48z6AyF3jaB7svZLFa9Xy1Xrgr61W4G8i5ksSHxQ4jMn5cGOzaeNYim+pQcjgXi4PtjGtEnSayrntrfYwuSndDuozyDqeAhplM5pGcBBhmOwAffkTmlm09z4qCMzBdHDnJ/65ZeD/onpz0kO3b2oFbP1ZxqIL88HA==';const _IH='075852dbcf677ac17371971ec10699eb03fc04d93c6392621a0311a7c0f93fda';let _src;

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
