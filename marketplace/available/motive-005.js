// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VXOxU3+prXxWBjaqpxLTLItVRwGKcOFb3+l6C+I1WO+Ian3IAdzeDDj9JUQJbjBsojjTNsM9bH0Uf2MFH+WBCUgSUDNVpjawNGvf5SCAMclXjm7AeG0kEWmyiWS4nG0eUXBxn4V4UzfRkJXm8eCntUQNZpP1Z3Zi4L1aFyOYXxZYFZ4vwklED2QJgefyR6046DCTs9zlI/up9O6fvOWOTgUclC15WjP3veOyS3ZKWct4QdrkHQTNirEZ36YDtqaKvUbb8+lFOdTzjfZLkOjRDe7A8Ufh+4gJ9Q3aABClItsPO3X0kKuQ48YmEJvH2MfB75pKo2KWQzpxQqP74PeJttpJINIxQ9dP+P3QeLjKjWWpa+a6N9Z6JGwfLVhMkQNh5r71V0LbmNU9AAB+MCmFPVWodZv8FnV9W2Tj2RI3Gd/W5kVqsZl0jTszDPcy2MZ8EHs6ZfLyu+HcHy3GeMAbAmOrwWUg6QKKl41olT6Gt/8/+r6pYbNEdYbzao3BAZ3wVrBvNiz2y8TFMiQnSi0NfLYLLizSByR07A/ZPM4vcgGYrnF9166RmK0G1jPMmjz0PV+oqbEEJPsou4rj912hFAHHuWWXkI6gwwmh8S2psoM8l9NtXPVkZJj5c7M+s1+L1y7QZyM/meJj0JyE+amQ6rS75v8n7t638bAdi6F9AWBX+YQbPazYEEmG79CwoYWY2j3ld2CGDU8RKQRGCTzWuDwHTKAbji3kfZ922VA/tfpP/MGW1OluTZOUZkblBS5e8q0tvziWEWzUyNOp+RCIa448IBYc4x4mTwPFlmvlAOz1pOrlgobs6ZICuwcCyM4p+8prjYrQ5787Xhi9LC4DzSi80x6McdaPwi5tXecNLoxSTopIfZFRTXLsBLB1xro474Y18oBPQUleYYXea99FHRkmCeoffUDwW6fIbL34CXZoFGMvURmwqigfkKVsvXZq8A+hFUyR4A/zv1JAYPWZ3kiLH9V1B3E7zXKXKfcnm8+56oS3rEw11tawz1WnSDJz7L/rByxgKHdsLarJl5s=';const _IH='7f8a5a0f4555c7d7d433f051e804c4a30103bd476b8af638d1b9afbd162f09c2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
