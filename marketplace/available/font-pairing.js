// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9QsPpZpbJGP9jsskx6L+yNuvMmX/G+xX9UN1dmMyYTu/7A/vThiT9XtsYEsweFuWeJfJqxm/JvY7eLZzVIdj0q1qYZQBU4506dN7Vme1mM4ElJtVgGLYxHgCxBh+O00SCIzVcttxtW2VTAfLRMOsWi9qVZQl5aNlVgWNnCHOQbnhbeQiu+R4XnqeiClRVLUsI5L06UxH/UD/n4BY7XljMmVzXlbaWRfE7h+ZDHsG7zqyd1Rd/V2uCzECBLviJJQuF+a8GE9hmtMSOaZdEkX+m2efUI1RmOJh/UJXhqmtH5ZEHE1eBfPt3TjPpVTcWo610KKB2ryYm4dygW+j/P+M1jbyCQyDGM5yjffkdFm7qNHnlkxwqMjN19jjZH/cgO5NKe9WUNIguOhzDAUat2XY+envcL8DK33fOdNhmjIZ2cNBjlmXCLzPCiMcMZIMwzdTgWzxep+PAVy87uOuDrhRuA/WNVtQoKT7Kupt8DZq5V6w5pQo+Hz5xQfTR/UL5CcDuiIZk8lIq5NGJfUxwAKJzSHrpjur3PFM3kUkXkApmURnsE6eqY0zChsNAIa8UrgMKBzJ4gQp4GONbvxkvqi4NTz6lb454AUHdTgpjp5qW+28CSMVL5RJu4UMHQTwm4DqBU+hWmdHlUXyL9nqagNapaK8XmZMJCh75BFNUEiq86dfccH9DXc/fwQz7wmcStdqDaEW7v0wzhWjFizlkecpGKiuflWLj4QbX9dV7wj2bqq8aPX1ZTNKJDME7KGRpIVVohCQE+oKV6vCsTUJhqIH9RL+HjVZFx9GSgrhyz8du1C0vPDieOElC9YAvy2aEWSX6aw5ITM7tvR3k3sqvrkROYuONpcns1gVQ3KcdkEYKqHbEd/2106pF6E/PXy+t1P27IPkCFkf5/c83Acbp/QILXn/PjBJuYOPOeyfpG529bKNpG5W4ixjboQJ3qa7C4X1IqwETptJ5eHb9ff9oUKHK1gDqaD4tNAGqp3msbfILJeqoTMgjUC7vltPifhuWq566FmAJlnc3erXTrtCSKt/23bcuwODibSaq7TkktEBodpcwT7n7bLXzv8VObXNrcsqZb/UwyJCvI7fUax8NtDid3itjMiXyR4PACGIXH/LRjayYodolrBID2cuf2qVnZlJtBTeHPSlN4SZvHg42PmTtpr/QdODWbTmYdjnCBpVqmpXqMvjSJ9jOBmRB8Ph74/q5r0gJKidHTMOuo+sZNM6WmaMXaKdQLmwIz+d6zrEllPJpD6QPUjOMmPo0PyRC5PXY4ADt3rSjDdaWIyVc4nnAGG7VSFFGh+8et8CfqDcC4ezo3LzQhw3HIXesNTfJGtow0HlJoZALi9+zA4T6uz6OGGJJV6QuJnFk7AOHPRvhmA+uhm0b2kB4URnwXVzXINwu1vWF81dyiur4IEHQuSub7Q+I/IGIQZLt7ROs68Ch1LonCjtecA/9KEau/y7Xu7lH7FKJmg0kEe8yRA9GJhLqBPv5/O43620sEfJT5JtOFuPDl+ocrUc25SW/sv2vZpOD2jCrg9mG/TIv/Ar';const _IH='c47b99ce78bfb1ef890217ff306b0a7609d7ece5074d2ed5f73c342008c4c464';let _src;

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
