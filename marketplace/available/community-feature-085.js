// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5MvMNgsxy5x8VEFbVJsPHvlnMZg0lpb4eBc29S/4kFcQdnJN0yzgiVeJrmfTLD2pdgn5Gp2btg5eCIomqrW/CV4O5xwMVWwV/n70U9vCxArSOXGAn4bisg01N+eLo3xkp44YZu+IWsetcMs3f9XryI1ZvUB2B6Gzgjp23LlK8ObKAvVYj4V+qYWChVjGv+RoP+RrwqZQJNQa3yQjAt24RxOmfUIRJGQf34yNFtBYpm0Y7vOgzZDpOkQOU0wWED2Xh63RDd5p4DW+8ZqP4GKHQE4p9DZj7jg05/bSDmu0iSYFFCByeeVmxfL6VUhlTg2k+OjiuEP2xzwzCxJSrARp4mqQ7Pa9CZjbsiAbRdFPjCiZNe6caTWAbAApZQK0segBiPPQ+A+8GCdViOsv9f1GhvRXMN2wNMPam2/oDBos4bfgGTvFX516C7G04rjaX1yQPe7k0TN+YHeATZBLlG/I6DRJGh7tATgRvBUdFypmYl2pQbsCkWi7ncbQliItISKLCd9NLibH+gUrzPrtI/pam3lwWjNOJBGD12kNNTdKn7j0Dj3Eode+GZCye+e+o5D5sDD87UEWQvYxg0aZSnmuQYKvNzXPM2klBEf/hPaDHLA8J91NtWdEa9Fur8+9Py3f+MCD4/jkgeMlqpoGapkYIydhJuw0rF6k4Eli651Y1rbuPKshxN2KJ/ax3K/f//lxpl9qxv1SUa4N+qdvVNXYRMKjYK9ft36VvhUebNf5TFE0sop2QmM=';const _IH='f062ad1cc5203fce305f4196aa9da0f7743e84c82fcf5be4d1c85906f03f4eba';let _src;

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
