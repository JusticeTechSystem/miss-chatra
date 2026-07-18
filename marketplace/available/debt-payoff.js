// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT0CARIiEtBB4G3huL2MCdSDuiObBEviZP6zCUroIvTYSXaMtk3tHU0qUMvqSN+cqQJsAu2TpBT7CWIuCjWuxhZ5RZrNbQvaU6UaTJpBQIVaERjAJ9ndZ4Ep+6i/NKujEW9Sy3u+oNqJHILcd3ootgsirCXdxTWAjkXBWyVK5Ij4X7pk+EdBIkz8YVR/ijWMgu10k7//W4u279bxP3aXaIdppI066WcSmCbbOhEeeBNP7YC9+X/Uw/6cBAaMTFipEbRQZYm77GaGVJGmeyeul+jOIY+XyyOcWmbuk3ivas6EbcyN3q+B8oD6RDinoTfeDevUEViDhDeR0Owo7isTUmVvKyyrajRDvtRW6YKw915hMIqTcsT968vYPXozoSyayBTfaqIE2mGvSwttpJ/lFcc4VlfU19T2KziTMalOOUawATmB2Cj++THylXgHQjeAszR661AUVVvWphWi9zNcA1AksJirgY5Y2IDr30VTM8S84qXUe8HJc46QVM4Ls3PIAlVUFeCon+0jOCo/DCwV7W8L3oSdU/wvrNXIFurhE+M6QwCkmpx9F3DSXiSXd0/hiNLz3cNmyvxc1x6LWY1Dvqm0pkI7uHm9NYGSWk7Vax8/ECxkZhh8iRYt3GpUT4/ipnPY5A3zKL/TiHyNlsq+z7mB5nwAUDOv/u/bNOhJiGpJeKSAMXBtcx9xXqq3mkaTJ5QRznj0QJluHeyz5vH66Bt/dbysZ+e+1uqIj8eXDEOxtMwBah7itcihJ8sRWKzOUblu8Z4td8arIL4St+vkZxNudgvq7MNNKOvweks15T1sOK+buSXZ3koVcWAMPqO7+gllsD5SXp95Q1lnUCFrvvCrJBeCq9U4enwaOn80DNOeEbu7uP1pbK8TYUfgWDY6ehwxreB44ON6bY9d8aNcQRQhLufTbp/eH1lDLXYjT8GOpvT7SQI8/uDHwGAq0Rx+xoGz7mR9J6WpLXqDtIUftEDOp3qHMtyWvjZOQNLJQrp/3yW8xxIWSS4o1qG5NfTTa8L+HmCu+Yt3TnhePM6Y+h+iHnDV6ACIYLwtJzScsLXyW+UnfJgTiiYCREfWUbwt1XB08LDLnhdkfsL/6Ocb59qeI7kwQUHcSDc2NA0pW/lEg14F+AadNHQnaKEN/rSp+oaCDkjWfWVP7SLJ1PUmA3agQvvZ5WZ3weTs4GVYtn9pfT9uWsw1tOIXpEGDgZQI3N0BJBrpotjjRI+8a+Dr6/8UWzcFtqwPOlDFjQlrogl7Wq62fG+Plreb9Ot0CqiwI8Sx8IOnEuHQEgUSbyCHpJJ0WlKmxRoWNR9kbcTsJf9Bq0AIsBid6iYvdNPbX6umF9Fzj0cdIlMlQeYN4sMH5VmuGZGc3V0kL4YAOle6zJF/9/E9LKnKH13m40HqjX8x1G3XLDzrj/yqJISsXnZK4nvrYKHTfeGR6PopgWjJbuCkoyug3I/Usxq6/PggVd+/R129PTUES/hqb2haiHWEbxkeQAczb58/SILZjxbgixKxuz8zre3lOqS8qEyebxQgPngXqh3Bo0BA3pA1WfAhoXXHyolzrwf9gzYmI+RJdW2/L0Y9g2ZCLBAxBdB5Q46QHtwSShSuLAVZ8Qm8puKDHHwXbM=';const _IH='db04eaa3120c7c681fc8832b3e3cb0332d3840b7542d09c9d73fe445d40a029c';let _src;

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
