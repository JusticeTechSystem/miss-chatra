// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Pmlz/wt8VRCdoP3RjD6knEhfpZ3n/MdEpoAHPFGuMS9D0Df5kz48pJHdcyEPZOdD8lnGIH32MOAeC21xZbQbrfCQqMdYdakYVPKmC3X62/uhucNICQvbZa4iIXj2sdzfLt25iY0Q20iHvzOa0sWKjXekprrbes3B4XnJ+MhH1kwUF5DKhy3lFCAmxZ+7sFG23TUYTkaMVsieOJSPTgpKBj4x6qojWZh6Bvj85dLCwhtM2WlmPEuskHu4RZp5lzYNYmsawHnb4Py+oyzLMwyARCgssuBseUy/wqxA/HvoIUUAKWGtFHOFdq7lZue4T8HTTEP5BVr6s0kcY/JmCZaY5y6QnZRcXT3/oLe/EuYrpKO4dHAuS8bo72d9lb4gVv3gy0KPqYw1Z8BmuBOR0MSgvPaTD4L3hlZueDaBLPqstXqdQtPvfVTd2WbACarfMsChuO6ilXKzMwo9ODIdve1PU59fDskkUSATK0gz+MB+5xhOeaCFVoulVJ6yahT6tn1WBHlqbgDpM9KqkifnHTlIDrvnwQJY6na9fPz1qV90Dq1ty8s5VX9kUmVWEqP4RaBNP7qHGfl/YJQKFdK1oIydFsWCTR3811ni+DifIbf4rzuBKUgUimqViY5Hm6VtZssrYFRzM09gOu5zsAYZtfk4p6xBCESs2GHpcfn2rrQi3wSY4XVytXY2WgsSJCTTNuqzvykIJSEzLLVFZyE4j24LyQ341rnWVNOe46Z+zMfXeJy7McDQaoavrNqE+os1IHCW3PPT6Zm59zFHHNnsPyZBH833q2cjjA3LQb9UbkxLrX6ImN+Sj58SmsL5GcAUdrdGXezwrP2ggewpRkE8r/pD6cJMOOfnZVRIFzP3n1RVtshdKd9Xw85lrXP0zwKkWUXkhlkyJOn9QXHagWcIim2MWZnh7k4Gm6u1qzVi1OvOkjWzry3BibAps7vhxSK2IlXEyjNJ9qnPv4sEISJ61ywIB8JwforQRLptq7DcVNkJ2XGX3YyQQwngBd5X4doEFlkb/6WSpmV1WuFjQP0MJ2Urk1beOSLo5+RRvsBZB5HsTxBuN9k3STNczROdQhrN9pcvVo2DjFALErERrg/am6o1o8mX0T7s+q7j3TDERplUsma8Z73/EtUoEUeTsQKtzUwEfjyyQ6CztYflywTpyEsGFe5ZcaDsDhpuhoDYnpcDC08QpEBEuqgi0XmWQ0S3r0OfyeW+3+vn';const _IH='6a15fc543fbb37dd71836dce680c7b15982155eae162d800476451581b46b2e2';let _src;

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
