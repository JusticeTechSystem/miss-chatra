// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaiAjwk57hTIbPLOgnSb6G2szfDGZSnE/5FNUz58LBq9g6EM82rzf6ug8SAVXNI/s2t51o8dwNWAMbUWnZINkcISsXtnYgI6GsZHn4uAUKlO0aW/SO7KwbSzSnMhcBCAVYvasvA9SEa+ZyAgOKVBsG819vKiLprH735cNHXb5SXeuqz9BXY+wypGBNAbmuvxdZO3qLhHC5Bnnk4F3or4K/CA+xKhX1eY8Lb7/WeWSg1ChgNNITJJ2EOhfC0Ur10n1Z34c0ufocciFsvDaXu/WiFZo+hw85PMlhQgDpf4mqV781QxA8SZtSxJdUK3qoh4+q4qPsj2k5ZtlOInld0DeoHmTmLWBJ7qhJqmN9R7Y5XrhjHsyfBGVTu/7FXtyjUft+AhQX5U79eH+lAUrA8hKI5k13XRR/dV66CNK2Bve8WRKl8VZfcZ4rpJhBRwtoGS7YDqIe+8ssh6swtFDYWYRZVtTfLyBmKF7OoZYBeLfp94/ZfE97SU16+fyWUfExVpk8lrRLxdgrr7fOORjzvI/g9DNnw4eIpRC5ZHeGokUstv6eelFB3uk5KJU8Yx/QaQu30eNXsLhKMN953slOZvSl0cvTOgpRyhjSd6pwe6kZHTjVWYgVnvvLED0oA/os3zYSvzWpsCRtY4yiO2E1zlc1BxpXwEDoTP9aKaYAs6P7s5WofyohzeGsXJbGqPXPUqKy3Z4pD4D4VttnWqjJoBCHD/Nc5hJ+LFI1FMoE/hkeYlvsDEVC01zyQ44Bn2yJS+AJt8vhILjX1Mu12QcLkWbItaa8dYKpHs9gmeNf3bwLRSTGvScAFOWi2Abrkzm8SscFNO870ZYTYj33ReazfDkg5FgKTkYy7ArozhiU6jQsk15FGw6f26h0SZGu4fRkVGD1P7MQrmiRR5HzFAYeL54J0gMxfaq6XrkX7vW28M1A7ONo55WYMUYTvoAq8nyORO61b0zEpFtO13MZ3naVfd61x2T8nTmDA1Uw+aZSdr8xKHgdwFjeCvWkjVyglNNNp27lnKwGkR3S7Xopyj8TiRaLrvDenF7WQ88JqgOeKYnsfa/YEqmsn854i41mIUm0YS45wd7jAkums6Ihrq5FlUP2s24HZrBjscD7dB2cuWsLRgr46PnkpqxpaW2yE6WW4q5bM4E/cacwdiZcHL6TYtG1SFLQU3g7yFhEzFjACCNrhk3MW97dbzuxsBU+G3Mq+2z1EHxG6Q==';const _IH='bfde2e81c50d60ee4772159c1e9edfd14f2eae1852b52eaed6639224d8ad933e';let _src;

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
