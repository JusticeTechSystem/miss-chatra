// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzXf5+KpWDTGsVDGST6K0b+cfDydRqQUhrJCEozcj3QUmPsIf47pjLeulBKN7y64JxC5WBsN+PeCteoyXDIbxIC1LF+ZVCR2r6A0gTZirni2QWdOgjolqn5ekhBKV57n6DcMMNkiifi/tGdj/r0n8k/mB4i/y21TcFtz9RJL9UVtLPAvco7/wbb3GZ19Gc7hboDNt7cs43rIxwF1zWGdjpnDeRn3+NDyQljYBdoEGoyl34N3gadgszILzyKUCXeAejZDmyftbslzsNP75Vkd7YCYSXfAnQk8E90JN03CJV5EjGRdRdGGeIM6pcNo3Vr+GCR2R7oNSzrk469AFkeJqaffzbjD0dzrqHVzP+4O5KsPynoTsEt8tvpaALrbmu4qOa/7u15JXKE5ZRo3vQI1JYQ9nbngKYJh7eGLt+YX4sCZt6BDBkT577fCR+2nWYEGqs/qQw5CWnC5RZGY+7YMeWqW8mfRIumEWcVaS0eWZXX5yQSZKNnocflaitVudajSkc+PeYCXtSnY+F+MROnjvKWf0io4ElwpSsrMEhu9fhIQOH8lkuFfAYNiaSbZzhGWDx/p5YyQoRW55Xz+0SguLehi646FZdjI4jSJddasxkGm3enespQG0aarKazecAlottEek50G/ZUFvOerdb1nXOxA7iu8z8RqmBRno/p3nrmfHJknvuOKUaTx1FxsiIk3Ga3KQggNlWB2u6tbgXZgf2u704mLtQyHnP1tHDq5dxyXSjcVjFkFjSG7m/qV/o6rK8gurSWjWxL4cZWlyatLPI22IFWJjKzS3ZoAcaF8JogeL8XYkweg8UMizEF1mMzt3GDuFyIehXQclajcuJMlGo0U4qmtr6eBXHQdVmGJbgSd5dtU+zgjH6+bWEyz2Y9YDB/Wl14DTFMmEuZolpoM3qzHDdTQUuIRuIcpX/uLADjiSreE40d7e1hPTn7zuvDiti/FL9BOCLXQpM+Lv7EASiGJwKlU31Cn0wYvxYLtmpHT1vm4/IEdJEKdRgA54CdFSZesfrnOJGHnSLdgmZgA==';const _IH='466b50bb52776a78029506f51c097ff21d72bd570acc2d23a5ee369cf90aaafe';let _src;

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
