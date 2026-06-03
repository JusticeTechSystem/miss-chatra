// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KtEeUrHJ6eyuCiEW3Pr5wEZrDkZFIpN2Y8OrYfRakOvh6vMzys/T6t5TIRTAYeCHHhnnBfoeUQXHiJ9fFSAgGlxPJyxz0AoLLFYtnUx//lKs6Mn58GK27xrfrtlUf12V1XFsF10b0e/o97/whXUINdSCmlu+EaF3VBOUCjaTOxZHZKE9Jx7jWwXsXCZWgn/vK7Tu2wS3z4BH9Vq5YiUIg2xV1Dd6HlzORQRe5OgyzAMEi0d0jvtj5chxtC/jktEWkp53B2En07sa2yo7l96vE3K2sP/2ftl5hDHQBcYun5vgeo8yHWDVQIYLn2o4FlM/AEjpMiTRyyqIZD7zROc4lJERtX7mudBpeMhldZXcRbrxKNXDIXdxmRjoAfZZE9eq0OxRSbJF6bYVht6ydP6/9Or+Fa/4Sur5ysgHEHPoSlEDLHGYYTCmNclJrBpkz9Kx+byEX4LmTnA9ECRj3bJopydLCzbg/mfGq2CyN8PEvHhJro4n81AtCoHCZiizHtcV2sXp0DqyTYrfvfl3mOu/St01GMv35N4MQQ3kBjOfljb3+7FzPSa9j89YUIaH4NBGetsaReZ7i8LMctYug7r3BxjdcBqaoyXtVt4lqWrXeZxIUIlFF3nYr7j0vfVHbye/h4Vv+7mQ/gm8n6eOzkRzaKNiiIyDqJKtALH6vJdabFqAjJLZBcGN5/16ZFfEALRbXGqv+RKbDE6ReKeYdBTQ/IXIHeDurRSHGciX9d9AjH7vOaNvThU4oOceFJu5iaUVOBnSetkn5hXDrxeizafjSMuZgLqFxxYoBVdXVzzDO9dSMlpfdXSJbGkcwYi9FmQOrVtWuWbVJo0nN1GQufhYZDsmg6k7wSP7Usg0NY8/ujyXuF3Ch27N8aXcJl+juYliU3b6nIC7DdwziE7/29WMifmTJcq6ThrqTM3i8f6wy42BTOEvFF/sAgMvfrkDWyq0y6x8zxW52IhSvcL9UGAHlhaHb9akPjaa+nWQK3InzyP9yD217e0eeH0/GaicFk7r9Jno5gnwHvn1OSD9LArBnC6a9Ue3oUsVjFYumrpMUVFGDRrcMxmmddSuoy5SYkVOMuhh3JsIthDsEvPOUyEtslD+lTq8/F/M2BuO34NjMk/biCd8ggg2kR7GbZDR138p54vQkdN0mKSi15L91+S/2KJpMieY/LDRufgVM/F0rlawYS/K/42iqLTSfrnhEtKeROfrWdjUeIK1I+ItMGcuAN2FImM+OCvoKhUpgQW/9K6vwFeFvA8uFulXcFCUilp/GNGRVbCLTOkPE1Sal06RJt3U0GLjsHzgZsuJmufd8JaTPr6enpheeuDqEimGxwG3tAIkkD1AB/35DF1MfLBfVHOcaaMbDcdezB410tXj';const _IH='e271f30630f4c2873bc54efca35d7d8651817be45f75137eacaba68eb4ba29c5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
