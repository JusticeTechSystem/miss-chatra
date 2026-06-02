// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FkjgmtoxUyqcXgKXK8NguVUavysz+vAmqufHxC7gnqy98CK3UeirLP0w/zaGlzHPlR9i9CdQdLASPX6de0f+1hM9xMnm87CJqZCaDzRhatAbEpfYdBxkb5LI7xKBrxMIJK9mBdDjnJ/9GNWRnxSLZ/jpOAtUe8MwJ0p1KjafD4llcnXlzpzkTs/dc61eT2SRIrtp9c1IX9AWKsKbAcXgkW4Ub+frCQfqfLgrcY+B53NptUy6owTEZ6ifJk9tuBumUnTcKKHxP0aonHc/FiQTdgZjPj7TT5xLM9/XQhw0OAtXwJUs3vLk8oC39nT5Js8GeBs/aOW+aceZnKfHi3UfBhn/3PNHrntD7M/+fMYiYQrTv90+MBfcne0swypni5fp7NJctDs4jL26yeEhTQjsB9tY4EZqZHM3muc1vIAkw3QXD2OvDwS0bpzEp2b6DjuxhfCj/VJrwX2j7SJoGIZ4bIVWhQ3Xi8yNA5N9+qjXhrcxqGGD6mDaka/1rYAOxPWC3El4inDKM8QP8YzEP5YeL4Nbt44m2/OFEaHBcHhSO7Q2s0gnTw377XxjH1zv8IkbsAUayU2DMCe30WLcoYqZqLjlJ0Vbju2CQEFE0z9/G6jV7N3vUkmYXBUFAyY1bsk35f7UhGfwi7C3jJD61mBmOpqVc7zpdefaQykgtzLYAcHcPGUUePkFY1ZBsIbwgyZvUpc8s/Pci/v/mdUo8+Ix/drMP/2wtqnWnzAQMb1ZUwPK9sKq4oBjs1Z8fUd4kgNHjRZjPipO99sukuDzjO5er7kKlcX28HXdk6ZxYujZxv99/jmUfwMzAPTnOAbBSJMB/Vy7+yzLsGpDyceoj+p9xY2QAwSb27VpoLcwAfqgwmB652jgHPpGpZG9P0LCeMTp9bWeiev6OkHwXums2ViY16JCe0dUvX6QTtLRfbfc2Xm9dU5edm1kP6nswR8DrY4DIuxnyjqpXUDtpN513sZVrPzkNWQuoa+AhcwRF5JGA7kQILbbDS7MUC9cTzgvIXDxyLH6d5PWO8YS2awJlfzGakfFtKAr+9EeoSXlf86/y64vsYRkNSTmPRQKEPm1lWEP0xz0/u7fIA7iNTX7KyixULY1QvuK1sIdSJrKPM2KZCKzkNod0iLZoTlUBc49mloO6vdG4SqHTq5WIAz7SlmZN2Vmt/Q10AKvtdcDD0/BdFyHNCjesBFdgzEYqy4VxtM0xuxlh5yss2ENPPKAST/yAZcH1Bpq+PpngQt7Hx3kz6xGt6TPwC7NX8INUeX1VadhvX+zFNdgcuWV7SWLJRsvhvdX9dbtwp8xiD6w2ePUK0BTXU6vB0lKyYfLqOuUf2keG2KpVWLAyKFUYme1kTug0iPr++ZbsqK5L8uMT1pg';const _IH='1ba4635eac77ce123ab75fa6caba93cce37df428f1fb25440b039c9257cbf9f5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
