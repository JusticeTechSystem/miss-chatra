// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzyaeoZ/gJkuXxDp+NWadtrmw5CWSKOLZ2VO9stCx8lkI197RWJnyFBPlscxWKhTl9YUECtybFMPjciSKZ199pyBFtcuz7hpYm8KcUg7+phguvcJGqvOWvm2yWB7ISk8FRCKeSA/U0Qw6n1lT5JyNLZPS6O8W6fVTSYoqNW3XoYNNWitiS6699QDNYyByEkjhZEKEtNPOrTQDHcgUcRCBzYull/zdkmSThUlrNOL8N3OIgCQ6NbRaSZRvuD7WI0WoVpl2KuoffHC37kBHur6zojDlYkb9bImSrOF995eP7JBIM28C4O8WprbvuuSHc6KBemmB9K/sw75PaKBcGjR4aZa2yRIg9Ls4EFZFlyUN2bUxIU4XidkxzxRv1cXbw4FXm/TNXY98NiBWTBjgDptfSeZGJYXktLnGm9UYiuACO5lzoMk3hTIIwn8dSBVVP4BnJAvNEMiYFr4mdxiTRROHO65jawtDIE7TPsbs9e8CeKMQW7tuQMJsAx37TWGJZIZjlMMEh4J0InvJgr9ydMdwjE5IbKg4NfaAR/0lDEIHonYAV6ru5RVcC9uyhqIdXsot0AfcRakpy4209FnkW7PnCPabs5LqaE6AbLguxUfdRthddBvzbeiwGnW78GY6JVE0okkj5NhI8/7afhOI0vlk9JfXrVN25fri3ZIfXhQcDS9U84XZxPbVLV7tLvymt64RSGLn5kF5y9n6Wx5tHeJ3fwEYehyp+dZxXNMHDhIyvdjKvyZGH+kNRY8SyT5ZE8RAqKcIcszEf3KckxY4csU/khKSKcAAoOMjupQ8SUlO56wwCuT6B3t5apl1V1akkZRYwvKbOEBuFsankAjpfPn0Tdr0inLcJIfCdR5G0zigLYZ0pKJqrNigtMokDyX0sjJ8oKnYqephHBNcLVK9szFH87Z+wlTzu7eUV17Pfl6qiYZnZCq/T3MWNy98UHjCpsxDwBSYFLA8mbss+qViiZQTYfqGvjNG6QnHYETGJCNPvPcKvnlrbuIg06vw4saVR21Bu3FBT8+2J1yoj5UnAPmZRiSMxADKtIn7R9Kl04FAsoOjcu6XEdxWP8HMo0Ff/gnj6wljDUePds9u5sB5b2dMtlILT/eI27m4h50Bq7Eb+aideA3hExGUqAyG8KQHF9ddrT2PyUC7NiwU4MDakfR54bq++DO4IOvOuKu4/FgF4LKHrkbPZIyrzNTtvEyvktygmQ+EjUGBGZ6JSCqpdC+6tx5rOVwjk0J1j+W4FTfHYI0FA6uQwhGcZt8OzwmTNR1vWPHfync3gAc3QFz3Xi+ZTMzCnHTcGuRuihzfKp4KqVjHKlPHVN2OtsMqpYJfnUq/qUC+Vl2ivWcdVElvkX4FWYSKPdZ//95V2lg34qsE=';const _IH='d9bc3353a36326665b3d3fffb64bb3f04a69bed8132a61a855854a3b620e2e6f';let _src;

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
