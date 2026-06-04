// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CU/1OyYxFqp1pAbS/t9QJ7L9TL+EPBhA/dVP+tilVYQCI7xgny2RNZA4fiMovRViD8teXAXuFMyr+TgZV14uH1aemAbIaKND83W2IIXnvhISLSZpFrtbkerIOxL62LcwEfqY8ktaQlr5g/IvXLsRM/Vkg4fnR9yljPPtKczPydaLWoGbrfRsDUU/aUkgwn4yStV0zCeClQpRZi/OoUSRIUKloWQ3XgG4/udyP+uN07FVv6KED6ehXcXuZJQWiSD2BZZ2BKkNFWpUaQ18wqIEGZMlUjTQxzAJsUl0rl+fikD9b1b/qocWwyMmijqNO/iV3++xukqHbnZzSEpjCASSQPnHHwNsbBfA8QuHUk+OuA2MmQ7Gpz0tSxhMs4o1cuFunP9Ji4qpXuI70Lu+amYaAG1ucBSnSCtn4bZcwYfoeBFfW+iaglTj//glH94S5KK9VZG8hvSUMwRgnXNfhNX4nusBONdPfaM+hCNAQNhed7W+oORRyWOsi83ALyGCkbSf7AGXJcYib6yAj655BBWUVLc12RB5X0EUXlnmrs58jiLbObIhLPBsO+ArtUFCcPLuJU5UlK8LEQ9PGdeo+Xt1GlORh++MYV+dWa/0QnOearSEoM6unHtZmyy1K0c3jR+07W7WNbehJXlE+U4Fmi2jrIsSJ2tMJzjECeAPyejJeo3O6K051NIETpvRr2HVw3KyFpV8lY5Z+Vu/Z5KP/kYNljt6As9pK5SnY8TlYclmc/cirl258QWgPCUizH3dQ9wBOLpG0pHlF4bMaJAExiqBA9bc7CFkDlwdOKQTsM3G6NUsd2nZflzhjO0W+qKA5Fn57fLD/1sUIa/e6TAXsKAfkC0kId2bj+1vf+VwVspcCVG4YzAdW4b/nyLeJvozhH6xUucf9jDSYnTd0GyTaOcDTu1oPtoTIK6VxbynIrbErf1TMxq1Y/wQKZ9dclv3yqJ6SEnva4E01s33IldBK/W9/fH7a5eyc0Nj1G+GeLdqpYtMNOgFZWYZ/J3jqK8N58C3pNgnj05l1Rw/nmbxXCQYNvFdAsFKsqRlbxw7lqYir/yT/W4HVshEWiHP7BipKzjLyJ1P29XhpIuQSgc+crczgP4IiKyEFG7181LeZVuwYkRk61bW9Qp3hUT6pLcll4Kayb5+3TBvwdUEEuQS50CJ8yQxyoC4B7kxpOIL4MYWk6lv7atvEcCzPpvngi8MdgVQBdeBDCrfHvEZ';const _IH='653976130bd867b11686cbec1e4ff470400b185f44533d3eacb74263a0194e4d';let _src;

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
