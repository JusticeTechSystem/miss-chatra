// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfY2iJck8u+YamDlfk0JQew0+qMQrvU/DMM+4NN2jxw3HRNZ3aHleXI4Iq3jprk3nejxQ5Me0J1yL5JsPHEu+m8jKP5VqSldk5TOwL6Uzzd5wUCxHeTWSU1v+fIS644oCWVZiHzquT5VrWI94VFLjuMhqX3PFMgAVpyBvpD/aYOChiNGuDyDISQZHy64fqXuCPicI3PJ5PTmP4pBidiikgxXvlV7y65c2veI+ALEYhms5zbuWnj9NPIbbZZE4MIe2ozco8RvZ/uljc0j+lp83tPy3NfGRIrHMZw+RIAs17SJqeUI2Gsi2wtaD6S93fQ/77sssZjuum5C6QZbncX+Hr5MUvVSGfZW8bzCDn4LmzPhYZmWEWP4FtFDa7MPrknsRtKh6iSsh8h+6Tonz5UnagtOH69Xc5rMKALommXtIlmgOk8IDb7RElFMAB9yINz5hc8WBMmorGJAs9EScKcfPCajvSostYD/Gt+J/haXqv1T9F9859XPnq5VUBZHhSMZky0CH4V4nUh7klJUtopWOXhBQ9sar11z44l7laY6GNM4rH2512JjQOr82O0uSWBqTSha81mmEuT7I20SfANYztsIKn714YEilNn4qoJcd5eKNZfeMosmcQnlh+956riBYZpy40XIT46pd8JoYCismrTSWQvzLnrjvM5jKpiG13SSOqFJZlQ5zD0Hw+3lyvDB1vNGHDZp5DqGZe9noDqZycVfP+Xy306p1fH5Mxevl0ptl53kHnlN9yCT7JFf0SVytgVzmPYDiFWanf+zV8xsneWRtKINbDzpCZdWcFi3agfUS0nFdwf5oGTJxRXZuAX0bz+MQUIJc0mTD+qjIlDiYZwj6eiItRcU0JTrIMlf5SwJR1V8RJIgKCDI3XPwQ1Y0liPaBjXtwY0VjjKfLDK4ickQXBEYlsyWXIRgUbaBbpAa/pA0LHrYGOqP8HOvF8zxQhqtdwD3u8WAio4TZhswJ2KC29pdta/iLSbyicx0YPFgpNeA/oL16ZVOaT7WfnCc1QjdmTujMJQRMOSVUNKr1JTOuiTzLMSQ3NjZyt1+Ud6m9Df84uBuBHZCnFkrdXSt81JfggIpbm5Phb0MXD5nvb+DlUCm14hc31nVRabKqlbv5Mzipal47ETw6ZxInD5reS6oXYUQlH6JKAkndR3sSJ5OAEKeyIdmsODqFoHJ9788dYzZ4Ya5KsZOYlriWO+it3FJeKM3I=';const _IH='a092d59a39f831e4577c42702026892b780c6c96542d9d86b916abb05f69d0bc';let _src;

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
