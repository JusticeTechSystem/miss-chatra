// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOEIzmXcECtZO+BvatgcEXY0XxK6Hqt+0qjv/cA6etwut8QcagZ67eR4L8sNbS2847+QZKldHc2YL7ukNfEBDhuWrGWfr9sMYG7L+FOwZPmCLqIUlquyNkeDMpt04DmbKmOBGynlUYCBTc9xxQ46i1Z8wPFLifuwLsK6DtXBBgqK8to8Bi9LY1uI1xegKG6WoZ8KuiYIixT+Sd0OXcIZfbzbIemDoWeolkcTZ/WhldjHj7e5awxU96y9cE4yedABMlJ5spqIJDI0t2MQ+oSQn1rCDmI+uLm8sK5+7f/k8gSQCgDW1FXgUWjK77jp2B/MkB2AM5DNr0KYK/M87l7qXmcho7qHc+EouY4vc8VlUSaHbx7AWAGOkWggpFcHQs+/Rvk01fquTQnnqEv7DTy55uhzPwsGVs/n4aX/cMECamwM7OrQ6MKRucLVHVlSCmKB/Cee8U2sCK8/+b11WYNukSkOoGlMd+WjmnTxP7166c7X74wqYjFNeE3CDGQsddZF4794QaDCJ/p/L46aLOqIGahJ7NlxYbLgEHEgIzZ3V+QzoZnLmoJgBblBd0kxNF2xfNVxMmmoXWqgossA7J58wwson1WSnaST2JaQARz81EzJwNgc/YAFaPAH9kSgR3ezTPlkxtOkgyp3rc2SbrI+fiajfobLX8GdTU+jr70kMrHHbRgaUBR4/uQ4Fonc8AJr6eGMbWwqcqNQyty+67Kft/jnf+SmdADQAwuhdrzdDekqUiMFHPD+7ikd+6M+PNEFltV27U2lrzwKvj/l9kZT3BV4dQK9zxENI76qhK1epczaJLBzVqsya5/D2StzoWEinW01qspJRTWZv7EVBPVhL8yPChRbQq+EeTzHa132AYyenYGtLxeecEeA6LuO5opEeD3uyvFTY3ZbDJxCSPHEps3yMetlH+l7bMp/yXvmVwfPs406fn/OptbIOJqwgTlnijQUl0w/6BU4eonMx9U4c4U9EVNVhHj9XfsLF+zSd5jcRcvs3qwuoCrv7/2JOkFnx6ffHUKQTf/DHz1VJlKPJzj4yoAEQy';const _IH='edce59f7304dfcabd03850d8c690eeaaa509f3ebf0f9a5f35d46c0f6e2040484';let _src;

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
