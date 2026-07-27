// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTg97hHodHGpUE7uDKKYDBbOwWaIgbto1fUAbpKnnmoEkI1MrRFn3NNAG/eeN6jaNqcq+l98al8sCURjrjf3tp/uEe2EhGGeW5jtpV2M54bg1nmxMw+De9tAR1Gjn1MZrjRDD3+GLLQfoJjQ8yWOwN3d7s4Jgn2nDk1KmBThBGobDxLg7mgIti4t4A11drs14V1Kj893iKGIcA9vqBNYJT2wwKUgU34TpBUSEBF0V/w6zF69KYo9iIt2kqQFWGmoXr8rn4neGQ30jQ/y2joURmnn0fMeBo9w5bxR/LGBJlmEUwYN4EpYJ/qioSM2OFp8olalmPQHY8qM6XlpprgxvMXyfXfNO978p+6AhEyvPQ7NR1/6HC/rRV37BGPNqsL7xxtR63r1Z0feqj/lyNQMbIsBOW2PngYjzH1YEIlntEhbU/EqKhDBs8MkQ0EP4zGwGAgdi8Ts8gePo+kadupRhKnM/TdZnZDITEutnF6N+O2FH7aXP/fo4UNVF/stkKy9d/NAHrEw+LINRyXLJ/5PICTgs0wJJbDx0Csk7P2LNrsZ1ySN/WApeJq+TuSmNiNzMsZ+yTo+r4SES1liP2CEj8Uv7SjegjaCF+kEIXi+dXYjEtKLq7znO/czqw6xU/GGJ/sHWiton+WT+dWSC7EPDKnbD4WRDlzwCaqUKfwtwsZi3YY3sNMDqDXnNa138UQ9ydeh/B3ac9DRDzht8ZWpSLOasmspp6rZv8ryXIzznQQ9YwNtIKtGh1Vj+OCQOTKVRvUY1zR1c3fzWqFRlf7dtxhoP9qDd3rkxnnPsOxTBYbBQmcU8jpt953b47EF4xsX7TavmujFZhsdkTT5KOfA421l1l3lATHo7pqGj1GuwHtF/BiZSkSjBSa4uXJUT6QLILk9l4oWrqF2bkrwv3tXZq/jtry9XA1Ad1miTu/w+7VOmnVBiiLUBFIS+N+JQ5p6Y+V4HPwe2rAQy+Bz5q8FtQGf1qBLSC0ZTl5WZKbFBwTpDOvUeaG/OJQKIfQj0sowxxeRlSNoaVR3IleZp3nac1dtDE6Fw0Ul4mF3I0OvuoIA5uhRIc9DABVekcszmXynav0cOAb9vcIYmwJNY/K/zBnwmZHKGvU1iDL0loVUTuapfAcfliArnsR4Sk9BHUQQUan0rhNuwLsNgfJJd63/GRytB9V7LXzF6rlGHogLoBXqV9K6EcYMX2YgSYuLvYhxOsIFlv8Lqj9tQijaMPFqNu5hIDDBADxxfOEx6JFsBeOx79loNnekRnd7hum8K5qqOvPCjS+P/wA9RsxcxQKnrPp8i0M/q1kID9Hfq1dwXWCFgUi4mRaHKWpGorExbLUpAWv6ob+Sp3Pwa9gmLrxC890c7MpmA0jH6rE';const _IH='588da0c2a1edd62e0579703369aad1c22b64b95db76ef6a59a6fecc8adb448c4';let _src;

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
